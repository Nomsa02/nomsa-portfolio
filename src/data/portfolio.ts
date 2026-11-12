// Update this file with verified professional and project information.
export const profile = {
  name: 'Nomsa Malaba',
  firstName: 'Nomsa',
  location: 'Johannesburg, South Africa',
  email: 'Nomsamalaba7@gmail.com',
  github: 'https://github.com/Nomsa02',
  linkedin: 'https://www.linkedin.com/in/nomsa-malaba-338226280',
  // Vite serves files in public/ from the root of the deployed site.
  cvPath: '/Nomsa_Malaba_CV.pdf',
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
    github: 'https://github.com/Nomsa02/odoo-popup-ops',
    demo: '',
  },
  {
    number: '02',
    name: 'Workout Companion',
    category: 'MOBILE APP DEVELOPMENT',
    description: 'A React Native workout-tracking app with a FastAPI backend that converts text-based routines into structured workout data.',
    status: 'In progress',
    stack: ['React Native', 'TypeScript', 'FastAPI'],
    visual: 'fitness',
    github: 'https://github.com/Nomsa02/workout-app',
    demo: '',
  },
  {
    number: '03',
    name: 'Career Compass',
    category: 'WEB APPLICATION DEVELOPMENT',
    description: 'A web development project exploring career guidance and helping people discover possible career paths.',
    status: 'In progress',
    // Replace these broad tags with the project's verified technical stack.
    stack: ['Web development', 'Career guidance'],
    visual: 'analytics',
    github: 'https://github.com/Nomsa02/Career-compass',
    demo: '',
  },
]

export const skills = [
  'Python', 'TypeScript', 'React', 'SQL', 'PostgreSQL',
  'Django', 'Odoo', 'Data analysis', 'R', 'Azure ML',
]
