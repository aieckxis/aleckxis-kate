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
      'Front-end lead for a smart farming system. engineered the interface for real-time environment monitoring.',
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

// Free, key-less live-screenshot service. Requesting an explicit height
// that matches our thumbnail's aspect ratio (16:10) makes mshots capture
// exactly the "above the fold" view a visitor sees when opening the link —
// instead of a taller full-page shot that then gets cropped/zoomed by CSS.
// First load per URL can take a few seconds while it renders; subsequent
// loads are served from cache.
function thumbnailUrl(url, width = 1200) {
  const height = Math.round(width / 1.6); // 16:10, matches .project-thumb
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}`;
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
            Computer Engineering graduate specializing in Software Development.
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

      <section id="projects" className="portfolio">
        <h2 className="section-title">
          Detailed <span>Portfolio</span>
        </h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-thumb"
                aria-label={`Open live preview of ${project.title}`}
              >
                <img
                  src={thumbnailUrl(project.url)}
                  alt={`Screenshot preview of ${project.title}`}
                  loading="lazy"
                />
                <div className="project-thumb-overlay">
                  <span>Visit Live Site →</span>
                </div>
              </a>
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

      <footer>
        <p>© 2026 Aleckxis Kate | Front-End Engineer &amp; Computer Engineering Graduate</p>
      </footer>
    </>
  );
}