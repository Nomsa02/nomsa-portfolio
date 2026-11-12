// Your personal information lives here. Edit this file first.
// Blank links are intentionally hidden until you add your real details.
export const profile = {
  name: 'Nomsa Malaba',
  firstName: 'Nomsa',
  location: 'Johannesburg, South Africa',
  email: 'Nomsamalaba7@gmail.com',
  github: 'https://github.com/Nomsa02',
  linkedin: 'www.linkedin.com/in/nomsa-malaba-338226280',
  cvPath: 'Nomsa_Malaba_CV.pdf',
}

export type Project = {
  number: string
  name: string
  category: string
  description: string
  status: 'In progress' | 'Planned' | 'Completed'
  stack: string[]
  visual: 'operations' | 'fitness' | 'analytics'
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'PopUpOps',
    category: 'APPLICATION DEVELOPMENT',
    description: 'An independent Odoo application project exploring event operations, workflows and practical business software.',
    status: 'In progress',
    stack: ['Odoo 17', 'Python', 'PostgreSQL'],
    visual: 'operations',
    github: '', // add your public PopUpOps repository URL
    demo: '',
  },
  {
    number: '02',
    name: 'Workout Companion',
    category: 'MOBILE APP DEVELOPMENT',
    description: 'A personal workout-tracking app that makes logging and reviewing training sessions more straightforward.',
    status: 'In progress',
    stack: ['React Native', 'TypeScript', 'FastAPI'],
    visual: 'fitness',
    github: '', // add your workout app URL when you publish it
    demo: '',
  },
  {
    number: '03',
    name: 'Data Stories',
    category: 'BUSINESS INTELLIGENCE',
    description: 'An upcoming Power BI case study focused on transforming raw data into useful business insights.',
    status: 'Planned',
    stack: ['Power BI', 'SQL', 'DAX'],
    visual: 'analytics',
    github: '',
    demo: '',
  },
]

export const skills = [
  'Python', 'TypeScript', 'React', 'SQL', 'PostgreSQL',
  'Django', 'Odoo', 'Data analysis', 'R', 'Azure ML',
]
