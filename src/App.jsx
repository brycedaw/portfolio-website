const projects = [
  {
    title: "Street Light Series",
    type: "Photo Essay",
    description:
      "A 3-week documentary project capturing evening routines in three neighborhoods.",
    action: "View case preview",
  },
  {
    title: "Bloom Studio Identity",
    type: "Brand Design",
    description:
      "Visual identity system for a floral startup, including packaging and social templates.",
    action: "See design system",
  },
  {
    title: "Museum Wayfinding Posters",
    type: "Editorial + UX",
    description:
      "Large-format print direction that improved visitor orientation and reduced confusion.",
    action: "Read outcomes",
  },
];

const skills = [
  { name: "Editorial Photography", level: 92 },
  { name: "Brand Systems", level: 84 },
  { name: "Figma Prototyping", level: 78 },
  { name: "Creative Direction", level: 88 },
];

const posts = [
  {
    title: "A Day in My Studio Workflow",
    summary:
      "Morning planning, midday client reviews, and evening photo retouching with a tight feedback loop.",
    date: "May 4, 2026",
  },
  {
    title: "How I Capture Better Location Portraits",
    summary:
      "My daily checklist for pre-lighting, subject comfort, and natural composition in public spaces.",
    date: "April 27, 2026",
  },
  {
    title: "Daily Habit: 20-Minute Visual Audit",
    summary:
      "Each day I collect references and annotate why a layout works to sharpen design instincts.",
    date: "April 18, 2026",
  },
];

function App() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <p className="brand">Aria Vale</p>
          <nav aria-label="Primary">
            <ul className="nav-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio for a Creative Professional</p>
            <h1 id="hero-title">
              I design visual stories that help brands feel human, memorable, and clear.
            </h1>
            <p className="intro">
              I am Aria, a photographer and visual designer blending editorial craft with
              human-centered interface thinking. I build brand moments people can feel in one
              glance.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                Explore selected work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Start a project
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Target audience information">
            <h2>Designed for</h2>
            <p>
              Recruiters, creative directors, and clients looking for a multidisciplinary
              photographer/designer with strong delivery habits.
            </p>
            <p className="small-note">Availability: Booking new projects for Summer 2026</p>
          </aside>
        </section>

        <section className="section container" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About Me</h2>
          <div className="about-grid">
            <article>
              <h3>Who is this person?</h3>
              <p>
                I am a creative professional with 6 years of client and editorial practice,
                focusing on identity-led photography and cross-channel visual direction.
              </p>
            </article>
            <article>
              <h3>What I bring</h3>
              <ul>
                <li>Fast concept-to-execution loops</li>
                <li>Design decisions grounded in audience behavior</li>
                <li>Calm communication across stakeholders</li>
              </ul>
            </article>
            <article>
              <h3>Current focus</h3>
              <p>
                Retail campaigns, arts organizations, and startups that need polished visual
                systems without losing personality.
              </p>
            </article>
          </div>
        </section>

        <section className="section container" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">Projects / Work</h2>
            <a className="text-link" href="#contact">
              Request full portfolio
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button type="button" className="chip-btn" aria-label={`${project.action} for ${project.title}`}>
                  {project.action}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills / Expertise</h2>
          <p className="section-intro">
            Practical strengths based on recent project outcomes and client feedback.
          </p>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="skill-card">
                <div className="skill-label-row">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div
                  className="meter"
                  role="img"
                  aria-label={`${skill.name} proficiency ${skill.level} percent`}
                >
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="blog" aria-labelledby="blog-title">
          <h2 id="blog-title">Blog: Daily Activities</h2>
          <div className="blog-list">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <a href="#contact" className="text-link">
                  Discuss this process
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p className="section-intro">
            Low-friction contact: share your goals and timeline, and I will reply within 24 hours.
          </p>
          <div className="contact-box">
            <a className="btn btn-primary" href="mailto:hello@ariavale.studio">
              Email: hello@ariavale.studio
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <p>Aria Vale • Visual Designer + Photographer • Based in Toronto</p>
        <a href="#top" className="text-link">
          Back to top
        </a>
      </footer>
    </>
  );
}

export default App;
