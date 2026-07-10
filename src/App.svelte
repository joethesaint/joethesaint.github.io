<script>
  import { onMount } from 'svelte';
  import BoidsVisual from './lib/BoidsVisual.svelte';
  import futaLogo from './assets/futa_logo.png';
  import holbertonLogo from './assets/holberton_logo.svg';

  // State
  let activeSection = 'summary';
  let isLightTheme = false;
  let currentPage = 'home';
  let mobileMenuOpen = false;

  // Toast notifications state
  let toast = { show: false, message: '', type: 'success' };
  let toastTimeout;
  
  function showToast(message, type = 'success') {
    if (toastTimeout) clearTimeout(toastTimeout);
    toast = { show: true, message, type };
    toastTimeout = setTimeout(() => {
      toast = { ...toast, show: false };
    }, 4000);
  }

  function navigate(page) {
    currentPage = page;
    window.scrollTo(0, 0);
    if (page === 'case-study') {
      setTimeout(runCalculation, 150);
    }
  }

  function handleNavClick(e, sectionId) {
    mobileMenuOpen = false;
    if (currentPage !== 'home') {
      e.preventDefault();
      currentPage = 'home';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  // Sizing Calculator Inputs
  let outcomesInput = '2.0, -1.0';
  let probsInput = '0.5, 0.5';
  let horizonInput = '50';

  function applyPreset(presetType) {
    if (presetType === 'coin-flip') {
      outcomesInput = '2.0, -1.0';
      probsInput = '0.5, 0.5';
      horizonInput = '50';
      showToast('Loaded Coin Flip Scenario (2:1 payoff)');
    } else if (presetType === 'crypto') {
      outcomesInput = '10.0, -1.0';
      probsInput = '0.15, 0.85';
      horizonInput = '20';
      showToast('Loaded Aggressive Crypto Options Scenario');
    } else if (presetType === 'equities') {
      outcomesInput = '0.25, -0.15';
      probsInput = '0.65, 0.35';
      horizonInput = '100';
      showToast('Loaded Conservative Equities Scenario');
    }
    runCalculation();
  }
  
  let calcResults = {
    error: '',
    ev: '0.5000',
    w: '-1.0000',
    fStar: '0.2500',
    qMin: '10.00',
    fInflection: '0.1429'
  };

  const articles = [
    {
      id: 1,
      type: 'local',
      platform: 'Local Case Study',
      title: 'Inflection Point Significance for the Investment Size in Finite Horizons',
      description: 'An analysis of Ralph Vince & Qiji Zhu\'s paper. We show how finite time horizons scale position sizes down from Kelly f* to inflection point f_I^Q. Includes an interactive math sandbox solver.',
      date: 'July 2026',
      link: '#blog-interactive'
    },
    {
      id: 2,
      type: 'medium',
      platform: 'Medium',
      title: 'Creating a Restaurant Review & Recommendation Application',
      description: 'A personal journey detailing the database structures, caching, and performance metrics behind recommendation engines.',
      date: 'March 15, 2023',
      link: '#'
    },
    {
      id: 3,
      type: 'linkedin',
      platform: 'LinkedIn',
      title: 'Ethics in the Age of Generative AI',
      description: 'Exploring accountability, transparency, and clinical/enterprise safety guardrails when leveraging large language models.',
      date: 'November 2023',
      link: '#'
    },
    {
      id: 4,
      type: 'substack',
      platform: 'Substack',
      title: 'Sustainable Engineering & Modern Software Architectures',
      description: 'Bridging the gap between Agricultural/Environmental sciences and scalable web applications. Why green computing matters for scalability.',
      date: 'January 2024',
      link: '#'
    }
  ];

  const projects = [
    {
      title: 'SaveMyLinks',
      github: 'https://github.com/joethesaint/savemylinks',
      desc: 'An open source website bookmark manager tool designed to save, organize, and categorize web links efficiently with a clean and simple interface.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Monty Interpreter',
      github: 'https://github.com/joethesaint/monty',
      desc: 'Developed a Monty ByteCode Interpreter, a simple yet effective tool that reads and executes bytecode commands from a file. Built with modular C design.',
      tags: ['C', 'Shell', 'Systems']
    },
    {
      title: 'Simple Shell',
      github: 'https://github.com/eeyuren/simple_shell',
      desc: 'A custom UNIX command-line interpreter built from scratch in C. Showcases system-level programming including process control and signals management.',
      tags: ['C', 'UNIX', 'Processes']
    },
    {
      title: 'Restaurant Recs & Review',
      github: '#',
      desc: 'A database-driven recommendation tool that leverages insights from user reviews, food bloggers, and local dining metrics to provide recommendations.',
      tags: ['Django', 'Python', 'PostgreSQL', 'Caching']
    }
  ];

  function runCalculation() {
    try {
      calcResults.error = '';
      const outcomes = outcomesInput.split(/[\s,\n]+/).map(x => x.trim()).filter(x => x !== '').map(x => parseFloat(x));
      const probs = probsInput.split(/[\s,\n]+/).map(x => x.trim()).filter(x => x !== '').map(x => parseFloat(x));
      const Q = typeof horizonInput === 'number' ? horizonInput : parseInt(String(horizonInput).trim(), 10);
      
      if (outcomes.some(isNaN) || probs.some(isNaN) || isNaN(Q)) {
        throw new Error('Please enter valid outcomes, probabilities, and horizon.');
      }
      if (outcomes.length !== probs.length) {
        throw new Error('Outcomes and probabilities length mismatch.');
      }
      
      const totalP = probs.reduce((a, b) => a + b, 0);
      const normProbs = probs.map(p => p / totalP);
      
      const ev = outcomes.reduce((sum, val, idx) => sum + val * normProbs[idx], 0);
      const evSq = outcomes.reduce((sum, val, idx) => sum + (val ** 2) * normProbs[idx], 0);
      const w = Math.min(...outcomes);
      
      if (w >= 0) {
        throw new Error('Worst outcome must be negative (ruin risk).');
      }
      if (ev <= 0) {
        throw new Error('Expected value must be positive.');
      }
      
      // Solver for f* where g_prime(f) = 0
      function gPrime(f) {
        return outcomes.reduce((sum, val, idx) => sum + (-normProbs[idx] * val) / (w - f * val), 0);
      }
      
      function gPrimePrime(f) {
        return outcomes.reduce((sum, val, idx) => sum + (-normProbs[idx] * (val ** 2)) / ((w - f * val) ** 2), 0);
      }
      
      let low = 0.0, high = 1.0 - 1e-12;
      for (let i = 0; i < 100; i++) {
        let mid = (low + high) / 2;
        if (gPrime(mid) > 0) {
          low = mid;
        } else {
          high = mid;
        }
      }
      const fStar = (low + high) / 2;
      const qMin = evSq / (ev ** 2);
      
      let fInflection = null;
      if (Q >= qMin) {
        function phi(f) {
          return gPrimePrime(f) + Q * (gPrime(f) ** 2);
        }
        let lowInf = 0.0, highInf = fStar;
        for (let i = 0; i < 100; i++) {
          let mid = (lowInf + highInf) / 2;
          if (phi(mid) > 0) {
            lowInf = mid;
          } else {
            highInf = mid;
          }
        }
        fInflection = (lowInf + highInf) / 2;
      }
      
      calcResults = {
        error: '',
        ev: ev.toFixed(4),
        w: w.toFixed(4),
        fStar: fStar.toFixed(4),
        qMin: qMin.toFixed(2),
        fInflection: fInflection ? fInflection.toFixed(4) : 'N/A (Q < Q_min)'
      };

      // Draw the plotly chart
      setTimeout(() => {
        drawChart(fStar, fInflection, outcomes, normProbs, Q, w);
      }, 0);
      
    } catch (e) {
      calcResults.error = e.message;
    }
  }

  function drawChart(fStarVal, fInflectionVal, outcomes, normProbs, Q, w) {
    if (typeof Plotly === 'undefined' || !document.getElementById('plotly-chart')) return;
    
    const f_vals = [];
    const r_exact = [];
    const r_approx = [];
    
    // Generate 100 points from 0 to 0.95
    for (let i = 0; i <= 100; i++) {
      const f = (i / 100) * 0.95;
      f_vals.push(f);
      
      // Exact: [ sum ( p_n * (1 - f * a_n / w)^(1/Q) ) ]^Q
      let sumExact = 0;
      let sumApproxLog = 0;
      for (let n = 0; n < outcomes.length; n++) {
        const factor = 1 - f * (outcomes[n] / w);
        sumExact += normProbs[n] * Math.pow(Math.max(0, factor), 1 / Q);
        sumApproxLog += normProbs[n] * Math.log(Math.max(1e-12, factor));
      }
      r_exact.push(Math.pow(sumExact, Q));
      r_approx.push(Math.exp(Q * sumApproxLog));
    }
    
    const activeGreen = isLightTheme ? '#00b359' : '#00e676';
    const trace1 = {
      x: f_vals,
      y: r_exact,
      name: 'Exact Return r_Q(f)',
      type: 'scatter',
      mode: 'lines',
      line: { color: activeGreen, width: 2.5 }
    };
    
    const trace2 = {
      x: f_vals,
      y: r_approx,
      name: 'Approximated Return',
      type: 'scatter',
      mode: 'lines',
      line: { color: isLightTheme ? '#5e5e6e' : '#8e8e9c', width: 1.5, dash: 'dash' }
    };
    
    const layout = {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      margin: { l: 50, r: 20, t: 20, b: 40 },
      showlegend: true,
      legend: {
        x: 0,
        y: -0.25,
        orientation: 'h',
        font: { size: 10 }
      },
      font: {
        family: 'JetBrains Mono, monospace',
        color: isLightTheme ? '#111115' : '#f5f5f7'
      },
      xaxis: {
        title: 'Fraction (f)',
        gridcolor: isLightTheme ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
        zerolinecolor: isLightTheme ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'
      },
      yaxis: {
        title: 'Expected Multiplier',
        gridcolor: isLightTheme ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
        zerolinecolor: isLightTheme ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'
      },
      shapes: []
    };
    
    // Add vertical line for f*
    if (fStarVal) {
      layout.shapes.push({
        type: 'line',
        x0: fStarVal,
        y0: 0,
        x1: fStarVal,
        y1: Math.max(...r_exact) * 1.05,
        line: {
          color: isLightTheme ? '#d32f2f' : '#ff5252',
          width: 1.5,
          dash: 'dot'
        }
      });
    }
    
    // Add vertical line for f_I^Q
    if (fInflectionVal) {
      layout.shapes.push({
        type: 'line',
        x0: fInflectionVal,
        y0: 0,
        x1: fInflectionVal,
        y1: Math.max(...r_exact) * 1.05,
        line: {
          color: isLightTheme ? '#0288d1' : '#29b6f6',
          width: 1.5,
          dash: 'dot'
        }
      });
    }
    
    Plotly.newPlot('plotly-chart', [trace1, trace2], layout, { displayModeBar: false, responsive: true });
  }

  // Toggle Theme
  function toggleTheme() {
    isLightTheme = !isLightTheme;
    if (isLightTheme) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    // Redraw chart with correct theme font colors
    runCalculation();
  }

  // Scroll Tracking
  const sections = ['summary', 'experience', 'blog', 'projects', 'skills', 'contact'];
  
  function handleScroll() {
    const scrollPosition = window.scrollY + 120;
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          activeSection = section;
        }
      }
    }
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    runCalculation();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<!-- Navigation Header -->
<header>
  <div class="container">
    <nav>
      <div class="logo">
        <div class="logo-dot"></div>
        <span>JOSEPH.B()</span>
      </div>
      <div class="nav-controls">
        <ul class="nav-links" class:open={mobileMenuOpen}>
          <li><a href="#summary" class:active={activeSection === 'summary' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'summary')}>Info</a></li>
          <li><a href="#experience" class:active={activeSection === 'experience' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'experience')}>Exp</a></li>
          <li><a href="#blog" class:active={activeSection === 'blog' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'blog')}>Blog</a></li>
          <li><a href="#projects" class:active={activeSection === 'projects' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" class:active={activeSection === 'skills' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" class:active={activeSection === 'contact' && currentPage === 'home'} on:click={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
        <button class="theme-toggle" on:click={toggleTheme}>
          {isLightTheme ? '[DARK_MODE]' : '[LIGHT_MODE]'}
        </button>
        <button class="mobile-menu-toggle" class:open={mobileMenuOpen} on:click={toggleMobileMenu} aria-label="Toggle navigation menu" aria-expanded={mobileMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
</header>

<!-- Main Wrapper -->
<main class="container">
  {#if currentPage === 'home'}
  <div class="page-fade-in">
  
  <!-- Hero / Summary Section -->
  <section id="summary" class="hero-section" style="position: relative; overflow: hidden;">
    <BoidsVisual {isLightTheme} />
    <div style="position: relative; z-index: 10;">
      <span class="hero-subtitle">SYSTEM.STATUS = "ACTIVE"</span>
      <h1 class="hero-title">Joseph Dave <span class="accent">Bamisaye</span></h1>
      <p class="hero-desc">
        Confident and results-driven Software Engineer with a Bachelor’s degree in Agricultural and Environmental Engineering. Specialized in sustainable development, green energy, and environmental innovation. Passionate about merging agricultural and environmental engineering with software engineering to create solutions that address the spectrum of sustainability challenges.
      </p>
      
      <div class="profiles-row" style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2rem;">
        <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; color: var(--accent-green);"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <a href="mailto:joebamisaye068@gmail.com">joebamisaye068@gmail.com</a>
        </div>
        <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted);">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; color: var(--accent-green);"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>EMEA / Remote</span>
        </div>
        <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; color: var(--accent-green);"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <a href="https://github.com/joethesaint" target="_blank" rel="noreferrer">joethesaint</a>
        </div>
        <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px; color: var(--accent-green);"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
          <a href="https://linkedin.com/in/joseph-bamisaye" target="_blank" rel="noreferrer">Joseph Dave Bamisaye</a>
        </div>
        <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px; color: var(--accent-green);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <a href="https://rxresu.me/terryhale722/joseph-bamisaye-software-engineer" target="_blank" rel="noreferrer">View CV</a>
        </div>
      </div>
      
      <div class="cta-group">
        <a href="https://rxresu.me/terryhale722/joseph-bamisaye-software-engineer" target="_blank" rel="noreferrer" class="btn btn-primary">[VIEW_RESUME]</a>
        <a href="#experience" class="btn btn-secondary">Read Experience</a>
        <a href="#blog" class="btn btn-secondary">Read Sizing Research Blog</a>
      </div>
    </div>
  </section>

  <!-- Career Experience Section -->
  <section id="experience">
    <div class="section-header">
      <h2 class="section-title">Career History</h2>
    </div>
    
    <div class="experience-list">
      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">Software Engineer</h3>
            <div class="exp-company">Private Quantitative Firm (NDA Protected)</div>
          </div>
          <span class="exp-duration">October 2024 - Present (Remote)</span>
        </div>
        <ul class="exp-desc">
          <li>Develop and maintain high-performance data pipelines and tools for quantitative analysis, leveraging Polars library for efficient data manipulation and processing.</li>
          <li>Design and implement integration and unit tests to ensure system reliability and accuracy in a high-stakes environment.</li>
          <li>Build scalable solutions for data scraping, cleaning, and transformation to support real-time decision-making processes.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">AI Trainer (Contract)</h3>
            <div class="exp-company">Turing</div>
          </div>
          <span class="exp-duration">November 2022 - December 2023 (Remote)</span>
        </div>
        <ul class="exp-desc">
          <li>Engaged in a research-based Python project focused on solving intricate puzzles to contribute to the development of an in-house AI model.</li>
          <li>Facilitated precise and ethical AI conversation through iterative debugging and coding comparison.</li>
          <li>Successfully completed key projects, providing solutions utilized for AI model training.</li>
          <li>Maintained strict adherence to confidentiality agreements and NDA with the client company.</li>
          <li>Demonstrated expertise in solving complex coding challenges.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">Software Engineering Intern</h3>
            <div class="exp-company">ALX Africa</div>
          </div>
          <span class="exp-duration">February 2022 - May 2023 (Remote)</span>
        </div>
        <ul class="exp-desc">
          <li>Collaborated within a diverse team to develop software solutions, gaining practical experience in a real-world environment.</li>
          <li>Implemented best practices in software development, consistently adhering to coding standards and industry guidelines.</li>
          <li>Contributed significantly to the design and development of a web application, leveraging Python, Django, and JavaScript.</li>
          <li>Conducted comprehensive testing and debugging processes to ensure the functionality and performance of the software.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">Programmer</h3>
            <div class="exp-company">Self-Employed</div>
          </div>
          <span class="exp-duration">December 2019 - Present</span>
        </div>
        <ul class="exp-desc">
          <li>Pursued self-learning to expand knowledge and skills in software engineering, continuously exploring new technologies and industry trends.</li>
          <li>Engaged in personal projects to deepen expertise and showcase a strong passion for programming.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">Lead Analyst</h3>
            <div class="exp-company">Tradify</div>
          </div>
          <span class="exp-duration">January 2018 - July 2020</span>
        </div>
        <ul class="exp-desc">
          <li>Moderated a financial think tank of 15+ diverse youths, fostering collaboration and driving innovative solutions.</li>
          <li>Demonstrated strong leadership skills by overseeing and coordinating critical projects to achieve organizational goals.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Blog / Case Study Section (Vince/Zhu Inflection Point Solver) -->
  <section id="blog">
    <div class="section-header">
      <h2 class="section-title">Research & Technical Articles</h2>
    </div>
    
    <!-- Articles Grid -->
    <div class="grid-2" style="margin-bottom: 3rem;">
      {#each articles as article (article.id)}
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem; height: 100%;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: bold; color: var(--accent-green);">
                {#if article.type === 'medium'}
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                {:else if article.type === 'linkedin'}
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
                {:else if article.type === 'substack'}
                  <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                {:else}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                {/if}
                <span>{article.platform}</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">{article.date}</span>
            </div>
            <h3 style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.75rem; line-height: 1.3;">{article.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">{article.description}</p>
          </div>
          {#if article.type === 'local'}
            <button class="proj-link" style="background: none; border: none; font-size: 0.8rem; margin-top: auto; cursor: pointer; text-align: left; padding: 0; color: var(--accent-green); font-family: var(--font-mono);" on:click={() => navigate('case-study')}>
              [READ_CASE_STUDY &rarr;]
            </button>
          {:else}
            <a href={article.link} class="proj-link" style="font-size: 0.8rem; margin-top: auto;">
              [READ_ON_PLATFORM &rarr;]
            </a>
          {/if}
        </div>
      {/each}
    </div>

  </section>

  <!-- Projects & Publications -->
  <section id="projects">
    <div class="section-header">
      <h2 class="section-title">Projects & Codebases</h2>
    </div>
    
    <div class="grid-3">
      {#each projects.slice(0, 3) as project (project.title)}
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem; height: 100%;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 0.5rem;">
              <span style="font-size: 0.8rem; font-weight: bold; color: var(--accent-green);">[PROJECT]</span>
              {#if project.github !== '#'}
                <a href={project.github} target="_blank" rel="noreferrer" class="proj-link" style="font-size: 0.8rem;">[GITHUB &rarr;]</a>
              {/if}
            </div>
            <h3 style="font-size: 1.15rem; font-weight: bold; margin-bottom: 0.75rem; color: var(--text-main);">{project.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">{project.desc}</p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto;">
            {#each project.tags as tag (tag)}
              <span class="skill-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; border-radius: 3px;">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div style="text-align: center; margin-top: 3rem;">
      <button class="btn btn-secondary" on:click={() => navigate('projects')}>
        [SEE_MORE_PROJECTS &rarr;]
      </button>
    </div>
  </section>

  <!-- Skills & Education -->
  <section id="skills">
    <div class="section-header">
      <h2 class="section-title">Credentials & Skills</h2>
    </div>
    
    <div class="grid-2">
      <div class="skills-container">
        <div>
          <h3 class="skill-group-title">Languages & Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag">Python</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">C</span>
            <span class="skill-tag">Django</span>
            <span class="skill-tag">Flask</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Polars</span>
            <span class="skill-tag">Pandas</span>
            <span class="skill-tag">NumPy</span>
            <span class="skill-tag">SciPy</span>
            <span class="skill-tag">Azure Cloud</span>
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">CI/CD Pipelines</span>
          </div>
        </div>
        
        <div>
          <h3 class="skill-group-title">Soft & Core Skills</h3>
          <div class="skill-tags">
            <span class="skill-tag">Quantitative Research</span>
            <span class="skill-tag">Data Infrastructure</span>
            <span class="skill-tag">Distributed Systems</span>
            <span class="skill-tag">Teamwork</span>
            <span class="skill-tag">Pair Programming</span>
            <span class="skill-tag">Critical Thinking</span>
            <span class="skill-tag">Fast Learner</span>
          </div>
        </div>
      </div>
      
      <div class="glass-card">
        <h3 style="font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--accent-green)">Education</h3>
        <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center;">
          <img src={futaLogo} alt="FUTA Logo" style="width: 48px; height: 48px; border-radius: 4px; border: 1px solid var(--card-border); object-fit: cover;" />
          <div>
            <div style="font-weight: 700;">Federal University of Technology, Akure</div>
            <div style="font-size: 0.85rem; color: var(--accent-green);">B.Eng. Agricultural & Environmental Engineering</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">2018 - 2023 | 3.99 CGPA</div>
          </div>
        </div>
        <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center;">
          <img src={holbertonLogo} alt="Holberton Logo" style="width: 48px; height: 48px; border-radius: 4px; border: 1px solid var(--card-border); object-fit: cover;" />
          <div>
            <div style="font-weight: 700;">Holberton School</div>
            <div style="font-size: 0.85rem; color: var(--accent-green);">Software Engineering Curriculum</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">2022 - 2023</div>
          </div>
        </div>
        
        <h3 style="font-size: 1.1rem; margin-top: 2rem; margin-bottom: 1.25rem; color: var(--accent-green)">Certifications</h3>
        <div class="lang-list">
          <div class="lang-item">
            <span style="font-size: 0.9rem;">Software Engineer (ALX)</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">2023</span>
          </div>
          <div class="lang-item">
            <span style="font-size: 0.9rem;">Ethics in Age of Generative AI</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">2023</span>
          </div>
        </div>
        
        <h3 style="font-size: 1.1rem; margin-top: 2rem; margin-bottom: 1.25rem; color: var(--accent-green)">Languages</h3>
        <div class="lang-list">
          <div class="lang-item">
            <span style="font-size: 0.9rem;">English</span>
            <div class="lang-dots">
              <div class="lang-dot active"></div>
              <div class="lang-dot active"></div>
              <div class="lang-dot active"></div>
              <div class="lang-dot active"></div>
              <div class="lang-dot active"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section id="contact">
    <div class="section-header" style="text-align: center;">
      <h2 class="section-title" style="justify-content: center;">Send a Message</h2>
    </div>
    
    <form class="contact-form" on:submit|preventDefault={() => showToast('Message transmitted successfully! Thanks for reaching out.')}>
      <input type="text" placeholder="Your Name" class="form-input" required />
      <input type="email" placeholder="Your Email Address" class="form-input" required />
      <textarea placeholder="Your Message" rows="5" class="form-input" style="resize: vertical;" required></textarea>
      <button type="submit" class="btn btn-primary">Transmit Message</button>
    </form>
  </section>
  </div>

  {:else if currentPage === 'case-study'}
  <div class="page-fade-in">
    <!-- Detailed Case Study / Interactive Sandbox Page -->
    <section id="case-study-page" style="padding-top: 40px; padding-bottom: 80px;">
      <div style="margin-bottom: 2rem;">
        <button class="btn btn-secondary" on:click={() => navigate('home')} style="font-family: var(--font-mono); font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem; background: none; border-color: var(--card-border); color: var(--accent-green); padding: 0.5rem 1rem;">
          &larr; [BACK_TO_PORTFOLIO]
        </button>
      </div>

      <article class="glass-card detail-card">
        <header style="position: static; background: none; backdrop-filter: none; padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1.5px dashed var(--card-border);">
          <span style="color: var(--accent-green); font-size: 0.85rem; font-weight: bold;">[TECHNICAL_CASE_STUDY] &bull; Q3 2026</span>
          <h1 class="detail-title" style="font-weight: 800; margin-top: 0.5rem; line-height: 1.2; color: var(--text-main);">
            Inflection Point Significance for the Investment Size in Finite Horizons
          </h1>
          <p style="color: var(--text-muted); font-size: 1rem; margin-top: 0.5rem; line-height: 1.5;">
            Evaluating the limit of growth-optimal sizing (Kelly Criterion $f^*$) vs. the Vince & Zhu Finite Time Horizon Inflection Point ($f_I^Q$).
          </p>
        </header>

        <div style="font-size: 1rem; color: var(--text-main); display: flex; flex-direction: column; gap: 1.5rem; line-height: 1.75; margin-bottom: 3rem;">
          <p>
            Classical growth optimization (e.g., the <strong>Kelly Criterion</strong>) dictates that an investor should allocate capital at a fraction $f^*$ to maximize long-term log-compounded wealth. While mathematically sound, operating at the growth-optimal peak is notoriously aggressive—often exposing portfolios to devastating drawdowns. 
          </p>
          <p>
            More importantly, the traditional derivation of $f^*$ assumes an <em>infinite time horizon</em>. In practical asset management, trading models run over a finite number of periods ($Q$). 
          </p>
          <p>
            In their paper, Vince and Zhu propose looking at the <strong>inflection point ($f_I^Q$)</strong> on the left side of $f^*$. Over the interval $[0, f_I^Q]$, the expected total return curve $r_Q(f)$ is convex, meaning the marginal return per unit of risk is increasing. Beyond $f_I^Q$, the return function enters a concave regime with diminishing marginal utility for additional risk.
          </p>
          <p>
            Notice how rapidly the inflection point moves away from f* as Q decreases toward Q<sub>min</sub>. When Q is small, the sizing suggested by the inflection point is substantially lower than f*, proving that finite horizons demand much more conservative sizing guidelines.
          </p>
        </div>

        <!-- Live Sandbox Sub-Widget -->
        <h3 style="font-size: 1.25rem; color: var(--accent-green); margin-bottom: 1.25rem; font-family: var(--font-mono)">[INTERACTIVE_SANDBOX_SOLVER]</h3>
        
        <!-- Preset Controls -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">Presets:</span>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-radius: 3px;" on:click={() => applyPreset('coin-flip')}>[COIN_FLIP_2:1]</button>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-radius: 3px;" on:click={() => applyPreset('crypto')}>[CRYPTO_OPTIONS]</button>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-radius: 3px;" on:click={() => applyPreset('equities')}>[CONSERVATIVE_EQUITIES]</button>
        </div>

        <div class="grid-2 sandbox-panel" style="background-color: var(--bg-primary); border: 1.5px solid var(--card-border); border-radius: 6px; margin-bottom: 2rem;">
          <div class="calc-container">
            <div class="calc-row" style="display: flex; gap: 1rem; margin-bottom: 1.25rem;">
              <div class="calc-field" style="flex: 1;">
                <label for="outcomes" class="calc-label" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; display: block;">Outcomes (newline/comma/space)</label>
                <textarea id="outcomes" class="calc-input" rows="3" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--card-border); color: var(--text-main); padding: 0.5rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.9rem;" bind:value={outcomesInput} on:input={runCalculation}></textarea>
              </div>
              <div class="calc-field" style="flex: 1;">
                <label for="probs" class="calc-label" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; display: block;">Probabilities (newline/comma/space)</label>
                <textarea id="probs" class="calc-input" rows="3" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--card-border); color: var(--text-main); padding: 0.5rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.9rem;" bind:value={probsInput} on:input={runCalculation}></textarea>
              </div>
            </div>
            
            <div class="calc-row" style="margin-bottom: 1.25rem;">
              <div class="calc-field">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <label for="horizon" class="calc-label" style="font-size: 0.8rem; color: var(--text-muted);">Holding Periods (Q)</label>
                  <span style="font-size: 0.85rem; color: var(--accent-green); font-family: var(--font-mono); font-weight: bold; background: var(--bg-secondary); padding: 0.1rem 0.4rem; border-radius: 3px; border: 1px solid var(--card-border);">{horizonInput}</span>
                </div>
                <input type="range" id="horizon" min="1" max="250" step="1" class="calc-input" style="width: 100%; background: var(--bg-secondary); border: 1px solid var(--card-border); color: var(--text-main); height: 6px; padding: 0; border-radius: 4px; cursor: pointer;" bind:value={horizonInput} on:input={runCalculation} />
              </div>
            </div>

            {#if calcResults.error}
              <div style="color: #ff5252; font-size: 0.85rem; margin-top: 0.25rem; margin-bottom: 0.5rem;">
                Error: {calcResults.error}
              </div>
            {/if}

            <div class="calc-results" style="margin-top: 1rem; background: var(--bg-secondary); border: 1px solid var(--card-border); padding: 1rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.85rem;">
              <div class="result-item" style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;"><span class="result-label">E[X]:</span><span class="result-value">{calcResults.ev}</span></div>
              <div class="result-item" style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;"><span class="result-label">Worst Outcome (w):</span><span class="result-value">{calcResults.w}</span></div>
              <div class="result-item" style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;"><span class="result-label">Kelly Peak f*:</span><span class="result-value" style="color: var(--accent-green); font-weight: bold;">{calcResults.fStar}</span></div>
              <div class="result-item" style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;"><span class="result-label">Q_min Threshold:</span><span class="result-value">{calcResults.qMin}</span></div>
              <div class="result-item" style="border-top: 1px dashed var(--card-border); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between;"><span class="result-label" style="color: #29b6f6;">Inflection f_I^Q:</span><span class="result-value" style="color: #29b6f6; font-weight: bold;">{calcResults.fInflection}</span></div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; justify-content: center; background: var(--bg-secondary); padding: 1rem; border-radius: 6px; border: 1px solid var(--card-border);">
            <div id="plotly-chart" style="width: 100%; height: 260px;"></div>
            <p style="color: var(--text-muted); font-size: 0.72rem; margin-top: 0.75rem; line-height: 1.4; text-align: center;">
              Figure: Expected multipliers. Red line = Kelly Peak ($f^*$), Blue line = Left Inflection ($f_I^Q$).
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
  {:else if currentPage === 'projects'}
  <div class="page-fade-in">
    <!-- Detailed All Projects Page -->
    <section id="all-projects-page" style="padding-top: 40px; padding-bottom: 80px;">
      <div style="margin-bottom: 2rem;">
        <button class="btn btn-secondary" on:click={() => navigate('home')} style="font-family: var(--font-mono); font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem; background: none; border-color: var(--card-border); color: var(--accent-green); padding: 0.5rem 1rem;">
          &larr; [BACK_TO_PORTFOLIO]
        </button>
      </div>

      <div class="glass-card detail-card">
        <header style="position: static; background: none; backdrop-filter: none; padding-bottom: 1.5rem; margin-bottom: 2.5rem; border-bottom: 1.5px dashed var(--card-border);">
          <span style="color: var(--accent-green); font-size: 0.85rem; font-weight: bold;">[ARCHIVE] &bull; INDEX OF PROJECTS</span>
          <h1 class="detail-title" style="font-weight: 800; margin-top: 0.5rem; line-height: 1.2; color: var(--text-main);">
            Complete Codebase Index
          </h1>
          <p style="color: var(--text-muted); font-size: 1rem; margin-top: 0.5rem; line-height: 1.5;">
            A list of tools, command-line interpreters, and web applications built using Python, C, and JavaScript.
          </p>
        </header>

        <div class="grid-3">
          {#each projects as project (project.title)}
            <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem; height: 100%; background: var(--bg-secondary);">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px dashed var(--card-border); padding-bottom: 0.5rem;">
                  <span style="font-size: 0.8rem; font-weight: bold; color: var(--accent-green);">[PROJECT]</span>
                  {#if project.github !== '#'}
                    <a href={project.github} target="_blank" rel="noreferrer" class="proj-link" style="font-size: 0.8rem;">[GITHUB &rarr;]</a>
                  {/if}
                </div>
                <h3 style="font-size: 1.15rem; font-weight: bold; margin-bottom: 0.75rem; color: var(--text-main);">{project.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">{project.desc}</p>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto;">
                {#each project.tags as tag (tag)}
                  <span class="skill-tag" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; border-radius: 3px; background: var(--bg-primary);">{tag}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
  {/if}
</main>

<!-- Toast Notification DOM -->
<div class="toast-notification" class:show={toast.show}>
  <span class="toast-icon">&gt;</span>
  <span>{toast.message}</span>
</div>

<!-- Footer -->
<footer>
  <div class="container">
    <p>&copy; {new Date().getFullYear()} JOSEPH DAVE BAMISAYE. Built with Svelte & Vite.</p>
    <div class="footer-meta">
      <a href="mailto:joebamisaye068@gmail.com">joebamisaye068@gmail.com</a>
      <span>EMEA / Remote</span>
    </div>
  </div>
</footer>
