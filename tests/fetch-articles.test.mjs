import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseFeed, feedUrls } from '../scripts/fetch-articles.mjs';

const MEDIUM = `<?xml version="1.0"?><rss><channel><title>Joe</title>
<item><title><![CDATA[Running AI agents &amp; tests]]></title><link>https://medium.com/@joe/running-ai-agents-123</link>
<pubDate>Tue, 24 Nov 2026 09:00:00 GMT</pubDate>
<content:encoded><![CDATA[<p>Agents say <b>tests pass</b> when nothing ran.</p>]]></content:encoded></item>
<item><title>No link</title><pubDate>Mon, 23 Nov 2026 09:00:00 GMT</pubDate></item>
</channel></rss>`;

test('parses a Medium item: title, link, date and plain-text summary', () => {
  const [a, ...rest] = parseFeed(MEDIUM, 'Medium');
  assert.equal(rest.length, 0, 'items without an https link are dropped');
  assert.equal(a.title, 'Running AI agents & tests');
  assert.equal(a.link, 'https://medium.com/@joe/running-ai-agents-123');
  assert.equal(a.date, '2026-11-24');
  assert.equal(a.description, 'Agents say tests pass when nothing ran.');
  assert.equal(a.platform, 'Medium');
});

test('long summaries are cut on a word with an ellipsis', () => {
  const long = '<p>' + 'word '.repeat(100) + '</p>';
  const xml = `<rss><item><title>T</title><link>https://x.substack.com/p/t</link><description><![CDATA[${long}]]></description></item></rss>`;
  const [a] = parseFeed(xml, 'Substack');
  assert.ok(a.description.length <= 220);
  assert.ok(a.description.endsWith('…'));
});

test('feed URLs come only from handles that are set', () => {
  assert.deepEqual(feedUrls({ medium: '', substack: '' }), []);
  assert.deepEqual(feedUrls({ medium: '@joe', substack: 'joe' }).map((f) => f.url), [
    'https://medium.com/feed/@joe',
    'https://joe.substack.com/feed',
  ]);
});
