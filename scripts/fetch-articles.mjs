// Reads the Medium and Substack feeds named in src/data/feeds.json and writes
// src/data/articles.generated.json, which the Research section shows.
// Runs before the build (npm run fetch:articles). A feed that fails to load
// never breaks the build: the previous file is kept.
import { readFile, writeFile } from 'node:fs/promises';

const FEEDS_FILE = new URL('../src/data/feeds.json', import.meta.url);
const OUT_FILE = new URL('../src/data/articles.generated.json', import.meta.url);
const MAX_PER_FEED = 6;

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? decode(m[1]).trim() : '';
};

const plain = (html, max = 220) => {
  const text = decode(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…` : text;
};

/** Parses an RSS 2.0 feed (Medium and Substack both serve one). */
export function parseFeed(xml, platform) {
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
  return items.slice(0, MAX_PER_FEED).map((item) => {
    const date = new Date(tag(item, 'pubDate'));
    const body = tag(item, 'description') || tag(item, 'content:encoded');
    return {
      platform,
      title: tag(item, 'title'),
      link: tag(item, 'link'),
      date: Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10),
      description: plain(body),
    };
  }).filter((a) => a.title && /^https:\/\//.test(a.link));
}

export function feedUrls(feeds) {
  const urls = [];
  const medium = (feeds.medium || '').replace(/^@/, '').trim();
  const substack = (feeds.substack || '').trim();
  if (medium) urls.push({ platform: 'Medium', url: `https://medium.com/feed/@${medium}` });
  if (substack) urls.push({ platform: 'Substack', url: `https://${substack}.substack.com/feed` });
  return urls;
}

async function main() {
  const feeds = JSON.parse(await readFile(FEEDS_FILE, 'utf8'));
  const urls = feedUrls(feeds);
  if (urls.length === 0) {
    console.log('fetch-articles: no feeds set in src/data/feeds.json; keeping the current list');
    return;
  }
  const all = [];
  for (const { platform, url } of urls) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'joethesaint.github.io build' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const found = parseFeed(await res.text(), platform);
      console.log(`fetch-articles: ${platform}: ${found.length} posts`);
      all.push(...found);
    } catch (err) {
      console.warn(`fetch-articles: ${platform} feed failed (${err.message}); keeping the current list`);
      return;
    }
  }
  all.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  await writeFile(OUT_FILE, `${JSON.stringify(all, null, 2)}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
