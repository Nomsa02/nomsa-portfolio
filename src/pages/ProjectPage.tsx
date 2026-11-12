import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'

const details: Record<string, {
  problem: string
  approach: string
  nextSteps: string[]
}> = {
  '01': {
    problem: 'Make temporary event operations easier to organise.',
    approach:
      'Building an independent Odoo application while exploring models, views, workflows and business processes.',
    nextSteps: [
      'Develop core event management workflows',
      'Add automated tests',
      'Document the completed features',
    ],
  },
  '02': {
    problem: 'Make workout tracking simpler and more accessible.',
    approach:
      'Developing a mobile application using React Native and a Python FastAPI backend.',
    nextSteps: [
      'Improve workout history',
      'Strengthen API testing',
      'Document the application architecture',
    ],
  },
  '03': {
    problem: 'Turn raw business data into useful insights.',
    approach:
      'A planned analytics project combining SQL, Power BI and DAX.',
    nextSteps: [
      'Prepare and clean a dataset',
      'Build a relational data model',
      'Create an interactive dashboard',
    ],
  },
}

export default function ProjectPage() {
  const { number } = useParams()

  const project = projects.find(
    (item) => item.number === number
  )

  if (!project) {
    return (
      <main className="case-study-page">
        <div className="container">
          <h1>Project not found.</h1>
          <Link to="/">← Back to portfolio</Link>
        </div>
      </main>
    )
  }

  const detail = details[project.number]

  return (
    <main className="case-study-page">
      <div className="container">

        <nav className="case-study-nav">
          <Link to="/">← Back to portfolio</Link>
          <span>nm.</span>
        </nav>

        <header className="case-study-header">
          <p className="case-study-eyebrow">
            {project.number} / {project.category}
          </p>

          <h1>{project.name}<em>.</em></h1>

          <p className="case-study-description">
            {project.description}
          </p>

          <div className="case-study-tags">
            {project.stack.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <p className="case-study-status">
            Status: {project.status}
          </p>
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
            <h2>Development roadmap</h2>
            <ul>
              {detail.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          {project.github && (
            <a
              className="case-study-github"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub Repository ↗
            </a>
          )}

          {project.demo && (
            <a
              className="case-study-github"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              View Live Demo ↗
            </a>
          )}
        </section>

      </div>
    </main>
  )
}