import { useState } from 'react'
import { profile, projects, skills, type Project } from './data/portfolio'
import { Link } from 'react-router-dom'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'operations') {
    return (
      <div className="visual operations-visual" aria-hidden="true">
        <div className="mini-panel">
          <div className="mini-panel-top"><span className="window-dots"><i/><i/><i/></span><span>popup / dashboard</span></div>
          <div className="mini-panel-body">
            <div className="mini-eyebrow">OPERATIONS OVERVIEW</div>
            <div className="mini-heading">Your workspace <span>↗</span></div>
            <div className="mini-stats"><div><small>Events</small><strong>—</strong></div><div><small>Bookings</small><strong>—</strong></div><div><small>Tasks</small><strong>—</strong></div></div>
            <div className="mini-item"><span className="mini-symbol">▦</span><span>Upcoming events</span><span className="mini-pill">Planning</span></div>
            <div className="mini-item"><span className="mini-symbol">◷</span><span>Team activity</span><span className="mini-pill">Overview</span></div>
          </div>
        </div>
        <span className="preview-stamp">CONCEPT PREVIEW</span>
      </div>
    )
  }

  if (type === 'fitness') {
    return (
      <div className="visual fitness-visual" aria-hidden="true">
        <div className="fitness-orbit fitness-orbit-one"/><div className="fitness-orbit fitness-orbit-two"/>
        <div className="phone-shell">
          <div className="phone-top">9:41 <span>•••</span></div>
          <div className="phone-kicker">YOUR MOVEMENT</div>
          <div className="phone-title">Make it count.</div>
          <div className="phone-week"><span>M</span><span>T</span><span className="active">W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
          <div className="phone-workout"><small>THIS WEEK</small><strong>Keep showing up.</strong><div className="phone-progress"><i/></div></div>
          <div className="phone-button">+ Log workout</div>
        </div>
        <span className="preview-stamp">CONCEPT PREVIEW</span>
      </div>
    )
  }

  return (
    <div className="visual analytics-visual" aria-hidden="true">
      <div className="analytics-sheet">
        <div className="analytics-overline">CAREER / EXPLORATION</div>
        <div className="analytics-title">Explore your path.</div>
        <div className="analytics-chart"><span style={{ height: '42%' }}/><span style={{ height: '63%' }}/><span style={{ height: '51%' }}/><span style={{ height: '78%' }}/><span style={{ height: '91%' }}/><span style={{ height: '69%' }}/><span style={{ height: '100%' }}/></div>
        <div className="analytics-bottom"><div><small>Explore possibilities</small><strong>01 / Discover</strong></div><div className="analytics-donut"/></div>
      </div>
      <span className="preview-stamp">PLANNED PROJECT</span>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} />
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
        <div className="project-title-row"><h3>{project.name}</h3><span className="project-number">{project.number}</span></div>
        <p>{project.description}</p>
        <div className="project-bottom"><div className="tag-list">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
          {project.github ? <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Arrow diagonal /></a> : null}
        </div>
        <Link
          className="case-study-link"
          to={`/projects/${project.number}`}
        >
          View case study ↗
        </Link>
        {project.demo ? <a className="demo-link" href={project.demo} target="_blank" rel="noreferrer">View live demo <Arrow diagonal /></a> : null}
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navigation = [
    { text: 'About', href: '#about' },
    { text: 'Work', href: '#work' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' },
  ]

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-container">
          <a href="#top" onClick={closeMenu} className="brand" aria-label="Go to homepage">nm<span>.</span></a>
          <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Main navigation">
            {navigation.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.text}</a>)}
          </nav>
          <div className="nav-right">
            {profile.cvPath ? <a className="nav-cv" href={profile.cvPath} target="_blank" rel="noreferrer">View CV <Arrow diagonal /></a> : <a className="nav-cv" href="#work">Portfolio <Arrow diagonal /></a>}
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/> HELLO, I'M {profile.firstName.toUpperCase()}</div>
           <h1>Building software.<br /><em>Making data useful.</em></h1>
            <p className="hero-lead">
              I'm a software developer with a BSc in Applied
              Statistics and Psychology from the University
              of Cape Town. I build practical applications,
              work with data, and enjoy solving problems
              through technology.
            </p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Arrow /></a><a className="button button-text" href="#about">A little about me <Arrow diagonal /></a></div>
            <div className="hero-footnote"><span className="tiny-flower">✳</span><span>Based in {profile.location}</span></div>
          </div>
          <div className="hero-feature" aria-label="Areas of focus: building, exploring and understanding">
            <div className="feature-upper"><span>IN PROGRESS / ALWAYS CURIOUS</span><span>001 — 003</span></div>
            <div className="feature-center"><span className="feature-asterisk">✳</span><div className="feature-orbit"><div className="feature-inner">NM</div></div></div>
            <div className="feature-lower"><span>Building <i>●</i> Exploring <i>●</i> Understanding</span><span>2026</span></div>
            <div className="feature-corner">A PORTFOLIO OF<br />THINGS I'M MAKING</div>
          </div>
        </section>

        <section className="intro-strip" id="about"><div className="container intro-grid"><div className="strip-label">A LITTLE ABOUT ME <Arrow diagonal /></div><p>My work sits at the intersection of <strong>software, data and people.</strong> I bring an analytical mindset to development, with a curiosity about why things work — and how to make them better.</p><div className="strip-highlight">BSc <span>Applied Statistics<br />&amp; Psychology · UCT</span></div></div></section>

        <section className="section projects-section container" id="work">
          <div className="section-top"><div><div className="section-kicker">01 / SELECTED WORK</div><h2>Things I'm <em>building.</em></h2></div><p>A selection of independent projects, experiments and ideas. Some are works in progress — all are part of the learning process.</p></div>
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section className="section capabilities-section"><div className="container capabilities-grid"><div><div className="section-kicker">02 / THE TOOLKIT</div><h2>Curious by nature.<br/><em>Technical by choice.</em></h2><p>I enjoy working across the full journey — from understanding a problem to building and testing a solution.</p></div><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

        <section className="section experience-section container" id="experience"><div className="section-top"><div><div className="section-kicker">03 / BACKGROUND</div><h2>Where I've <em>been.</em></h2></div></div><div className="experience-list">
          <div className="experience-row"><span>2026 — PRESENT</span><div><h3>Software Development Internship</h3><p>Building and testing business application features, including user interfaces, workflows, permissions and reporting.</p></div><span className="experience-label">DEVELOPMENT</span></div>
          <div className="experience-row"><span>EDUCATION</span><div><h3>University of Cape Town</h3><p>BSc in Applied Statistics and Psychology.</p></div><span className="experience-label">ACADEMIC FOUNDATION</span></div>
        </div></section>

        <section className="contact-section" id="contact"><div className="container contact-content"><div className="section-kicker">04 / GET IN TOUCH</div><h2>Have an idea?<br/><em>Let's make it real.</em></h2><p>I'm interested in opportunities across software development, data and AI — and always happy to connect.</p><div className="contact-actions">
          {profile.email ? <a className="button button-light" href={`mailto:${profile.email}`}>Send me an email <Arrow diagonal /></a> : <span className="contact-placeholder">Contact email will be added before publishing.</span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a> : null}
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a> : null}
          {profile.cvPath ? <a href={profile.cvPath} target="_blank" rel="noreferrer">My CV <Arrow diagonal /></a> : null}
        </div><div className="contact-decoration">✳</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-content"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed &amp; built with care.</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  )
}

export default App
