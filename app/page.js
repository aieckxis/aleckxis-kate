import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          Aleckxis<span>Kate</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <h4 className="hello-tag">Front-End Engineer</h4>
          <h1>
            I am <span>Aleckxis Kate</span>
          </h1>
          <p className="description">
            Computer Engineering graduate specializing in Software Development.
            I transform complex logic into high-performance, user-centered
            interfaces.
          </p>
          <div className="hero-btns">
            <a
              href="https://www.linkedin.com/in/aleckxis/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
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
        </div>
        <div className="hero-visual">
          <div className="neon-circle">
            <img src="/profile1.jpeg" alt="Aleckxis Kate Professional Portrait" />
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
          <div className="project-card">
            <div className="card-content">
              <span className="tag">Next.js 15 • Supabase • TypeScript</span>
              <h3>Clayden&apos;s Food Hub</h3>
              <p>
                Professional catering platform featuring dynamic menu
                rendering and automated booking flows.
              </p>
              <a
                href="https://v0-claydens-food-hub-website.vercel.app"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-content">
              <span className="tag">TypeScript • IoT Dashboard</span>
              <h3>GrowUp Thesis Dashboard</h3>
              <p>
                Front-end lead for a smart farming system. engineered the
                interface for real-time environment monitoring.
              </p>
              <a
                href="https://grow-up-front-end.vercel.app/dashboard"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Dashboard →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-content">
              <span className="tag">Next.js • Resend • Vercel</span>
              <h3>Personal Portfolio</h3>
              <p>
                This site — a full-stack portfolio built with Next.js App
                Router, featuring a live contact form backed by a serverless
                email API.
              </p>
              <a
                href="https://aleckxis-kate.vercel.app"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-content">
              <span className="tag">HTML • CSS • JavaScript</span>
              <h3>Blingzy&apos;s Restobar</h3>
              <p>
                Restaurant and bar website with an interactive menu, category
                filtering, image gallery, and booking-friendly contact
                section.
              </p>
              <a
                href="https://blingzys-restobar.vercel.app/"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live →
              </a>
            </div>
          </div>
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