import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/portfolio'

type CaseStudy = {
  problem: string
  approach: string
  highlights: string[]
  nextSteps: string[]
}

const details: Record<string, CaseStudy> = {
  '01': {
    problem: 'Make temporary event operations easier to organise.',
    approach:
      'Developing an independent Odoo 17 application to practise business models, views and operational workflows.',
    highlights: [
      'Odoo-based business application development',
      'Exploration of models, views and workflows',
      'A publicly documented learning project',
    ],
    nextSteps: [
      'Develop and test the core event-management workflows',
      'Add automated tests',
      'Document completed features with screenshots',
    ],
  },
  '02': {
    problem: 'Make logging workouts easier when routines are written in plain text.',
    approach:
      'Building a React Native mobile interface with a FastAPI backend. Python regular expressions extract workout details and Pydantic validates the structured result.',
    highlights: [
      'Mobile interface built with React Native and TypeScript',
      'FastAPI endpoint for importing workouts from text',
      'Structured exercise details such as sets and repetitions',
    ],
    nextSteps: [
      'Improve workout history and tracking',
      'Expand parsing and API tests',
      'Document mobile-to-backend setup',
    ],
  },
  '03': {
    problem: 'Help people navigate information about potential career paths.',
    approach:
      'Exploring a career-guidance web application, with an emphasis on making information approachable and helping users explore their options.',
    highlights: [
      'Career-focused web application project',
      'Interface and information organisation',
      'Repository available to explore the implementation',
    ],
    nextSteps: [
      'Verify and document the implemented features',
      'Add screenshots and a clear walkthrough',
      'Update this case study with the verified technical stack',
    ],
  },
}

export default function ProjectPage() {
  // Using the last path segment supports /projects/01 and is not tied
  // to a particular React Router parameter name.
  const { pathname } = useLocation()
  const projectId = pathname.split('/').filter(Boolean).pop()
  const project = projects.find((item) => item.number === projectId)
  const detail = project ? details[project.number] : undefined

  if (!project || !detail) {
    return (
      <main className="case-study-page">
        <div className="container">
          <h1>Project not found.</h1>
          <Link to="/">← Back to portfolio</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="case-study-page">
      <div className="container">
        <nav className="case-study-nav">
          <Link to="/#work">← Back to portfolio</Link>
          <span>nm.</span>
        </nav>

        <header className="case-study-header">
          <p className="case-study-eyebrow">{project.number} / {project.category}</p>
          <h1>{project.name}<em>.</em></h1>
          <p className="case-study-description">{project.description}</p>

          <div className="case-study-tags">
            {project.stack.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <p className="case-study-status">Status: {project.status}</p>
        </header>

        <section className="case-study-content">
          <div>
            <h2>The problem</h2>
            <p>{detail.problem}</p>
          </div>
          <div>
            <h2>My approach</h2>
            <p>{detail.approach}</p>
          </div>
          <div>
            <h2>Project highlights</h2>
            <ul>{detail.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          <div>
            <h2>Development roadmap</h2>
            <ul>{detail.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>

          {project.github && (
            <a className="case-study-github" href={project.github} target="_blank" rel="noopener noreferrer">
              View GitHub Repository ↗
            </a>
          )}
          {project.demo && (
            <a className="case-study-github" href={project.demo} target="_blank" rel="noopener noreferrer">
              View Live Demo ↗
            </a>
          )}
        </section>
      </div>
    </main>
  )
}
