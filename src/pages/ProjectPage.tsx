import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/portfolio'
import './ProjectPage.css'

type Feature = { title: string; description: string }
type CaseStudy = {
  challenge: string
  approach: string
  features: Feature[]
  process: string[]
  nextSteps: string[]
  visualLabel: string
}

const details: Record<string, CaseStudy> = {
  '01': {
    challenge:
      'Temporary events bring together bookings, schedules and operational tasks. Keeping these processes organised is the problem this project explores.',
    approach:
      'I am building an independent Odoo 17 learning project to practise how business applications are structured, from Python models and views to connected operational workflows.',
    features: [
      { title: 'Business models', description: 'Exploring how Odoo models represent the information behind an operational process.' },
      { title: 'Views and navigation', description: 'Structuring records and screens so an event workflow is easier to follow.' },
      { title: 'Incremental development', description: 'Developing the application in milestones and documenting what is implemented.' },
    ],
    process: ['Define an event', 'Organise records', 'Manage tasks', 'Review workflow'],
    nextSteps: [
      'Build and verify the core event-management workflow',
      'Add automated tests for completed features',
      'Document working screens with real application screenshots',
    ],
    visualLabel: 'CONCEPTUAL WORKFLOW · NOT A PRODUCT SCREENSHOT',
  },
  '02': {
    challenge:
      'Workout routines often arrive as unstructured text. Re-entering every exercise, set and repetition can make workout logging unnecessarily slow.',
    approach:
      'I built a React Native and TypeScript mobile interface connected to a Python FastAPI backend. The backend uses regular expressions to extract exercise details, with Pydantic models providing structured validation.',
    features: [
      { title: 'Text-to-workout parsing', description: 'Extract exercise names, sets and repetition ranges from written routines.' },
      { title: 'API and validation', description: 'Expose workout importing through FastAPI and validate the response with Pydantic.' },
      { title: 'Mobile experience', description: 'Build the import and workout interface with React Native and TypeScript.' },
    ],
    process: ['Paste a routine', 'Parse exercise text', 'Validate the data', 'Review a workout draft'],
    nextSteps: [
      'Improve workout history and tracking',
      'Expand parsing examples and API tests',
      'Document phone-to-backend setup and add screenshots',
    ],
    visualLabel: 'ILLUSTRATIVE EXAMPLE · TEXT PARSING FLOW',
  },
  '03': {
    challenge:
      'Exploring possible career paths can involve a lot of scattered information. The project investigates ways to make that exploration more approachable.',
    approach:
      'Career Compass is a web development project focused on organising career information into an interface people can explore. The GitHub repository is the source of truth for its current implementation.',
    features: [
      { title: 'Career exploration', description: 'A project centred on helping users investigate possible career directions.' },
      { title: 'Information design', description: 'Presenting career-related information through a more approachable interface.' },
      { title: 'Iterative development', description: 'Refining the project as features and technical documentation are verified.' },
    ],
    process: ['Identify the question', 'Organise information', 'Explore options', 'Refine the experience'],
    nextSteps: [
      'Verify and document the features currently implemented',
      'Add actual screenshots and a short walkthrough',
      'Update the case study with the verified technical stack',
    ],
    visualLabel: 'CONCEPTUAL VIEW · NOT A PRODUCT SCREENSHOT',
  },
}

function ProjectIllustration({ number }: { number: string }) {
  if (number === '01') {
    return (
      <div className="cs-art cs-art-ops" aria-label="Illustrative event operations workflow">
        <div className="cs-art-top"><span>POPUP / WORKSPACE</span><span>01 — 03</span></div>
        <div className="cs-ops-window">
          <div className="cs-window-head"><span className="cs-dots"><i/><i/><i/></span><span>Event operations / overview</span></div>
          <div className="cs-ops-body">
            <div className="cs-tiny-label">WORKSPACE CONCEPT</div>
            <div className="cs-ops-title">Keep things moving<span>↗</span></div>
            <div className="cs-ops-cards"><div><small>EVENTS</small><strong>01</strong></div><div><small>BOOKINGS</small><strong>02</strong></div><div><small>TASKS</small><strong>03</strong></div></div>
            <div className="cs-ops-item"><span className="cs-item-dot"/> Plan event schedule <span className="cs-mini-pill">Planning</span></div>
            <div className="cs-ops-item"><span className="cs-item-dot"/> Coordinate next steps <span className="cs-mini-pill">Workflow</span></div>
          </div>
        </div>
        <div className="cs-art-foot"><span>BUSINESS APPLICATIONS</span><span>ODOO 17</span></div>
      </div>
    )
  }

  if (number === '02') {
    return (
      <div className="cs-art cs-art-fitness" aria-label="Illustrative text-to-workout data flow">
        <div className="cs-art-top"><span>WORKOUT / IMPORTER</span><span>02 — 03</span></div>
        <div className="cs-import-wrap">
          <div className="cs-input-panel"><small>INPUT / PLAIN TEXT</small><strong>Lower body workout</strong><p>Squats 3 sets of 10 reps</p><p>Lunges 3 sets of 12 reps</p><p>Rest 60 seconds</p></div>
          <div className="cs-import-arrow">→</div>
          <div className="cs-output-panel"><small>OUTPUT / WORKOUT DRAFT</small><div><span>Squats</span><strong>3 × 10</strong></div><div><span>Lunges</span><strong>3 × 12</strong></div><div className="cs-output-valid">✓ Structured data</div></div>
        </div>
        <div className="cs-art-foot"><span>TEXT → API → DATA</span><span>FASTAPI</span></div>
      </div>
    )
  }

  return (
    <div className="cs-art cs-art-career" aria-label="Illustrative career exploration concept">
      <div className="cs-art-top"><span>CAREER / EXPLORATION</span><span>03 — 03</span></div>
      <div className="cs-career-window">
        <div className="cs-tiny-label">EXPLORE POSSIBILITIES</div>
        <h3>Discover what comes <em>next.</em></h3>
        <div className="cs-career-query"><span>Explore different directions</span><span>↗</span></div>
        <div className="cs-career-options"><span>Technology</span><span>Data</span><span>People</span></div>
        <div className="cs-career-lines"><i/><i/><i/></div>
      </div>
      <div className="cs-art-foot"><span>HUMAN-CENTRED IDEAS</span><span>WEB DEVELOPMENT</span></div>
    </div>
  )
}

export default function ProjectPage() {
  const { pathname } = useLocation()
  const projectId = pathname.split('/').filter(Boolean).pop()
  const project = projects.find((item) => item.number === projectId)
  const detail = project ? details[project.number] : undefined
  const next = project ? projects[(projects.findIndex((item) => item.number === project.number) + 1) % projects.length] : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!project || !detail) {
    return (
      <main className="case-study-page"><div className="cs-shell cs-not-found"><h1>Project not found.</h1><Link to="/#work">← Back to portfolio</Link></div></main>
    )
  }

  return (
    <main className="case-study-page">
      <div className="cs-shell">
        <nav className="cs-topbar" aria-label="Case study navigation">
          <Link to="/#work" className="cs-back">← <span>Back to selected work</span></Link>
          <Link to="/" className="cs-brand" aria-label="Portfolio homepage">nm<span>.</span></Link>
        </nav>

        <header className="cs-hero">
          <div className="cs-hero-copy">
            <div className="cs-eyebrow"><span className="cs-star">✳</span> PROJECT {project.number} / {project.category}</div>
            <h1>{project.name}<em>.</em></h1>
            <p className="cs-summary">{project.description}</p>
            <div className="cs-tags">{project.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
            <div className="cs-hero-actions">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="cs-button cs-button-primary">Explore the code <span>↗</span></a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="cs-button cs-button-secondary">Live demo <span>↗</span></a>}
            </div>
          </div>
          <div className="cs-hero-visual"><ProjectIllustration number={project.number}/><p className="cs-visual-caption">{detail.visualLabel}</p></div>
        </header>

        <div className="cs-meta-bar" aria-label="Project details">
          <div><small>PROJECT TYPE</small><strong>{project.category.toLowerCase()}</strong></div>
          <div><small>STATUS</small><strong><span className="cs-status-dot"/>{project.status}</strong></div>
          <div><small>FOCUS</small><strong>{project.stack.slice(0, 2).join(' · ')}</strong></div>
        </div>

        <section className="cs-section cs-story" aria-labelledby="cs-story-title">
          <div className="cs-section-title"><span>01 / THE STORY</span><h2 id="cs-story-title">From a problem<br/>to a <em>project.</em></h2></div>
          <div className="cs-story-grid">
            <article><span className="cs-card-index">01 / THE CHALLENGE</span><h3>Why build this?</h3><p>{detail.challenge}</p></article>
            <article><span className="cs-card-index">02 / THE APPROACH</span><h3>How I'm approaching it</h3><p>{detail.approach}</p></article>
          </div>
        </section>

        <section className="cs-section" aria-labelledby="cs-highlights-title">
          <div className="cs-section-heading"><span>02 / INSIDE THE BUILD</span><h2 id="cs-highlights-title">Key <em>highlights.</em></h2></div>
          <div className="cs-feature-grid">{detail.features.map((feature, index) => (
            <article key={feature.title} className="cs-feature"><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>
          ))}</div>
        </section>

        <section className="cs-section cs-process" aria-labelledby="cs-process-title">
          <div className="cs-section-heading"><span>03 / PROJECT FLOW</span><h2 id="cs-process-title">How it <em>connects.</em></h2></div>
          <div className="cs-flow" aria-label="Conceptual project workflow">
            {detail.process.map((step, index) => (
              <div className="cs-flow-cell" key={step}><span className="cs-flow-num">0{index + 1}</span><strong>{step}</strong>{index < detail.process.length - 1 && <span className="cs-flow-arrow" aria-hidden="true">→</span>}</div>
            ))}
          </div>
          <p className="cs-footnote">Conceptual process overview; not a claim that every step is fully implemented.</p>
        </section>

        <section className="cs-section cs-roadmap" aria-labelledby="cs-roadmap-title">
          <div><span className="cs-card-index">04 / WHAT'S NEXT</span><h2 id="cs-roadmap-title">Still <em>building.</em></h2><p>These are the next improvements planned as the project evolves.</p></div>
          <ol>{detail.nextSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
        </section>

        <footer className="cs-footer">
          <div><span>MORE WORK</span><h2>Keep <em>exploring.</em></h2></div>
          <div className="cs-footer-links">
            {next && <Link to={`/projects/${next.number}`}>Next project: {next.name} <span>↗</span></Link>}
            <Link to="/#work">All projects <span>↗</span></Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
