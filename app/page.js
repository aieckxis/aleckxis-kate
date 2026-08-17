'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

const projects = [
  {
    tag: "Next.js 15 • Supabase • TypeScript",
    title: "Clayden's Food Hub",
    description:
      'Professional catering platform featuring dynamic menu rendering and automated booking flows.',
    url: 'https://v0-claydens-food-hub-website.vercel.app',
    linkLabel: 'View Live →',
  },
  {
    tag: 'TypeScript • IoT Dashboard',
    title: 'GrowUp Thesis Dashboard',
    description:
      'Served as Frontend & Edge IoT Developer for GrowUp, a self-sustaining IoT vertical aquaponics system. Engineered the React.js/Flutter interface for real-time environment monitoring and crop-health tracking.',
    url: 'https://grow-up-front-end.vercel.app/dashboard',
    linkLabel: 'Live Dashboard →',
  },
  {
    tag: 'Next.js • Resend • Vercel',
    title: 'Personal Portfolio',
    description:
      'This site — a full-stack portfolio built with Next.js App Router, featuring a live contact form backed by a serverless email API.',
    url: 'https://aleckxis-kate.vercel.app',
    linkLabel: 'View Live →',
  },
  {
    tag: 'HTML • CSS • JavaScript',
    title: "Blingzy's Restobar",
    description:
      'Restaurant and bar website with an interactive menu, category filtering, image gallery, and booking-friendly contact section.',
    url: 'https://blingzys-restobar.vercel.app/',
    linkLabel: 'View Live →',
  },
];

// Live-screenshot service (thum.io, free/key-less). The `wait/5` segment
// tells thum.io to hold for ~5s before capturing so JS-heavy Next.js
// pages finish rendering their hero/nav before the snapshot is taken.
// `crop` locks the output to our 16:10 aspect ratio directly from the
// service, and object-position:top in CSS keeps the visible crop
// anchored to the top of the page (nav + hero).
//
// `cacheBust` changes once a day, so thum.io is forced to grab a fresh
// screenshot instead of serving back a stale cached one from before a
// redesign — without hammering the service on every single page load.
function thumbnailUrl(url, width = 1200) {
  const height = Math.round(width / 1.6); // 16:10, matches .project-thumb
  const cacheBust = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // daily
  return `https://image.thum.io/get/width/${width}/crop/${height}/noanimate/wait/5/${url}?cb=${cacheBust}`;
}

function ProjectThumbnail({ project }) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [attempt, setAttempt] = useState(0);

  const src = `${thumbnailUrl(project.url)}${attempt ? `&retry=${attempt}` : ''}`;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-thumb"
      aria-label={`Open live preview of ${project.title}`}
    >
      <div className="project-thumb-wrap">
        {status !== 'ready' && (
          <div className="thumb-skeleton">
            <div className="thumb-skeleton-dot" />
            {status === 'loading' && <span>Loading live preview…</span>}
            {status === 'error' && <span>Preview failed to load</span>}
          </div>
        )}

        <img
          key={attempt}
          src={src}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          className={status === 'ready' ? 'is-ready' : 'is-loading'}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
        />

        {status === 'error' && (
          <button
            type="button"
            className="thumb-retry-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setStatus('loading');
              setAttempt((n) => n + 1);
            }}
          >
            Retry
          </button>
        )}
      </div>

      <div className="project-thumb-overlay">
        <span>Visit Live Site →</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <header id="home" className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Front-End Engineer
          </span>
          <h1>
            Hi, I&apos;m <span>Aleckxis Kate</span>
          </h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p className="description">
            Computer Engineering graduate specializing in System Development.
            I transform complex logic into high-performance, user-centered
            interfaces.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View My Work →
            </a>
            <a
              href="https://www.linkedin.com/in/aleckxis/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/aieckxis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>

          <div className="tech-stack">
            <span className="tech-stack-label">Technologies I Work With</span>
            <div className="tech-stack-icons">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">Tailwind</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap">
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-blob">
              <img src="/profile1.jpeg" alt="Aleckxis Kate Professional Portrait" />
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            Core <span>Expertise</span>
          </h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Strengths</h3>
              <ul>
                <li>Detail-oriented, organized, and dependable</li>
                <li>Strong problem-solver with an adaptable mindset</li>
                <li>Growth-oriented attitude with leadership experience</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>Core Values</h3>
              <ul>
                <li>Integrity, accountability, and excellence</li>
                <li>Continuous learning and professional collaboration</li>
                <li>Social responsibility in engineering development</li>
              </ul>
            </div>
            <div className="about-card full-width">
              <h3>Career Objective</h3>
              <p>
                To become a skilled and socially responsible Computer
                Engineer specializing in Software Development, dedicated to
                creating innovative, reliable, and user-centered systems that
                contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section dark-bg">
        <h2 className="section-title">
          Professional <span>Experience</span>
        </h2>
        <div className="timeline">
          <div className="t-card highlight">
            <span className="tag">Jul – Sep 2025</span>
            <h3>IT Intern | NexusCloud IT Solutions</h3>
            <p>
              Focused on hands-on project-based learning for network
              configurations and cybersecurity.
            </p>
            <ul className="exp-list">
              <li>
                Configured VLANs, inter-VLAN routing, NAT, DHCP, and Access
                Control Lists (ACLs).
              </li>
              <li>
                Collaborated on developing a website for Ethical Hacking &amp;
                Penetration Testing programs.
              </li>
              <li>
                Performed CLI-based router and switch troubleshooting for
                CCNA-level protocols.
              </li>
            </ul>
          </div>

          <div className="t-card">
            <span className="tag">Jul – Sep 2024</span>
            <h3>Intern | ATECH IT Solutions Inc.</h3>
            <p>
              Assisted with hardware/software troubleshooting and OS
              installation for client systems.
            </p>
          </div>

          <div className="t-card">
            <span className="tag">Jul – Sep 2023</span>
            <h3>Student Assistant | Sta. Cecilia Parochial School</h3>
            <p>
              Processed student applications, maintained organized databases,
              and handled financial documents.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="section dark-bg">
        <h2 className="section-title">
          Education <span>Background</span>
        </h2>
        <div className="timeline">
          <div className="t-card highlight">
            <span className="tag">2022 – 2026</span>
            <h3>Polytechnic University of the Philippines</h3>
            <p>
              Bachelor of Science in Computer Engineering, specialized in
              System Development.
            </p>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="container">
          <h2 className="section-title">
            Research <span>Experience</span>
          </h2>
          <div className="about-grid">
            <div className="about-card full-width">
              <h3>
                GrowUp: A Self-Sustaining Vertical Farming Solution for
                Year-Round Crop Production
              </h3>
              <p>
                <strong>Role:</strong> Frontend &amp; Edge IoT Developer
              </p>
              <p>
                <strong>Research Problem:</strong> Rapid urbanization in the
                Philippines has driven escalating food insecurity and severe
                spatial constraints, while existing smart-farming systems
                offer limited integration between environmental monitoring
                and AI-based crop assessment.
              </p>
              <p>
                <strong>Methodology:</strong> A developmental, experimental,
                and descriptive-evaluative design was used to build and
                validate an IoT-enabled vertical aquaponics prototype —
                combining a Raspberry Pi 5 sensor array with a YOLO-based
                crop health model — evaluated over a 45-day period, with user
                acceptance measured through the UTAUT framework.
              </p>
              <p>
                <strong>Technologies Used:</strong> Raspberry Pi 5, Python,
                YOLOv8n / YOLO26n, React.js, Flutter, Firebase, and a
                BME280 / BH1750 / DS18B20 / PH4502C / MQ-137 sensor array.
              </p>
              <p>
                <strong>Findings:</strong> The system maintained optimal
                environmental stability (mean temperature 28.30°C, pH 6.74)
                and produced kale with a mean height of 16.62 cm — roughly
                sixfold the conventional soil-based baseline. Under UTAUT
                evaluation, Performance Expectancy scored highest at 3.87,
                reflecting strong user-recognized value.
              </p>
              <p>
                <strong>Conclusion:</strong> GrowUp demonstrates the
                empirical viability of converging vertical aquaponics, edge
                computing, and lightweight AI to overcome urban farming
                constraints, with high user readiness for residential
                deployment.
              </p>
              <p>
                <strong>Published Paper:</strong> Journal Publication Format
                submitted to the PUP Research Management and Intellectual
                Property Office (RMIPO).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio">
        <h2 className="section-title">
          Detailed <span>Portfolio</span>
        </h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.url}>
              <ProjectThumbnail project={project} />
              <div className="card-content">
                <span className="tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="advocacy" className="section dark-bg">
        <h2 className="section-title">
          Honors &amp; <span>Leadership</span>
        </h2>
        <div className="container">
          <div className="about-grid">
            <div className="about-card full-width">
              <h3>Academic Honors &amp; Scholarships</h3>
              <ul className="exp-list">
                <li>
                  PUP President&apos;s Lister — 1st Semester, A.Y. 2022 – 2023
                </li>
                <li>
                  PUP Deans&apos;s Lister — 2nd Semester, A.Y. 2025 – 2026
                </li>
                <li>
                  Iskolar ni Gob (SAP Scholarship) — Provincial Government of
                  Rizal (2022 – 2026)
                </li>
              </ul>
            </div>
            <div className="about-card full-width">
              <h3>Organizations &amp; Leadership Roles</h3>
              <ul className="exp-list">
                <li>
                  Member, Humane Education Committee — Youth for Animals, PUP
                  Main (2023 – 2024), (2025 – 2026)
                </li>
                <li>
                  Treasurer — Youth for Animals, PUP Main (2024 – 2025)
                </li>
                <li>
                  Member, Adoption and Fostering Committee — Sintang Pusa, PUP
                  Main (2024 – 2026)
                </li>
                <li>
                  Flyer — PUP College of Communication (COC) Cheering Squad
                  (2025 – 2026)
                </li>
                <li>
                  Volunteer — The Philippine Animal Welfare Society (PAWS)
                  (2026 – Present)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <ContactForm />
      </section>

      {/* High-contrast Hire Me / Let's Work Together banner, right before the footer */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-grid">

            {/* Left Column: Call to Action */}
            <div className="cta-col cta-left">
              <span className="sub-tag">LET&apos;S WORK TOGETHER</span>
              <h2>Have a project in mind?</h2>
              <p>
                I&apos;m always open to discussing new opportunities,
                full-time engineering roles, and innovative web projects.
              </p>
              <a href="#contact" className="btn-primary">
                Get in Touch ↗
              </a>
            </div>

            {/* Middle Column: What I Bring Checklist */}
            <div className="cta-col cta-mid">
              <h3>What I Bring to the Table</h3>
              <ul className="checklist">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Full-time Front-End / React &amp; Next.js Roles</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Fast UI/UX Component Prototyping</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Responsive, Accessible &amp; High-Performance Builds</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Clean Git Workflow &amp; Cross-Functional Teamwork</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Direct Contact & Socials */}
            <div className="cta-col cta-right">
              <h3>Direct Contact</h3>
              <div className="contact-details">
                <a href="mailto:aleckxiskate@gmail.com" className="direct-link">
                  <span className="icon">✉</span> aleckxiskate@gmail.com
                </a>
                <a href="tel:+639000000000" className="direct-link">
                  <span className="icon">📞</span> +63 (916) 217-7032
                </a>
              </div>
              <div className="social-links-wrap">
                <span className="social-label">Follow / Connect</span>
                <div className="social-badges">
                  <a
                    href="https://github.com/aieckxis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aleckxis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-badge"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Aleckxis Kate V. Bernabe</p>
      </footer>
    </>
  );
} 