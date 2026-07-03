import type { Ref } from 'react'
import type { Education, Job, SkillGroups } from '../types'
import Section from './Section'

const SKILLS: SkillGroups = {
  'Languages & Frameworks': [
    'TypeScript',
    'JavaScript',
    'React',
    'C#',
    'ASP.NET Core',
    'Python',
    'SQL',
    'HTML',
    'CSS',
  ],
  'Software & Tools': [
    'Git & GitHub',
    'Jira (administration & automation)',
    'Azure / Entra ID',
    'SQL Server',
    'Node',
    'Vite',
    'IIS',
    'Adobe Photoshop',
    'Lightroom',
  ],
  'AI & Automation': [
    'Claude & Claude Code',
    'MCP integrations',
    'Multi-agent review workflows',
    'Power Automate',
    'Jira automations',
  ],
  'Leadership & Methodologies': [
    'Agile',
    'Scrum',
    'Certified Product Owner (CPO)',
    'Certified Scrum Master (CSM)',
    'Release Management',
    'Capacity Planning',
    'Stakeholder Management',
    'Software Development Life Cycle (SDLC)',
  ],
  'Security & Other': [
    'Identity & Endpoint Management',
    'Network Security',
    'Security Due-Diligence Reviews',
    'Disaster Recovery Planning',
    'IT Support',
    'Training',
  ],
}

const EXPERIENCES: Job[] = [
  {
    company: 'CEM Benchmarking',
    title: ['Software Engineer', 'Senior Engineer & Team Lead', 'Director, Engineering'],
    period: ['January 2019 - July 2023', 'July 2023 - July 2026', 'July 2026 - Present'],
    points: [
      'Lead a growing engineering team through 60+ Scrum sprints, from planning and estimation through review and release.',
      'Manage releases across the product suite, with a reputation for catching stale branches and bad data before they ship.',
      'Took our client data collection platform from first scoping conversations to its first live collection cycle with major UK pension funds.',
      'Own IT security for the company, from identity and endpoint management to network security, including security reviews with our largest institutional clients.',
      'Built the sprint analytics tool behind our 1:1s in React and TypeScript, tracking velocity, review load, and carryover each sprint.',
      "Wove Claude and MCP into the team's daily work, from sprint reporting and documentation to security audits.",
      'Inherited an undocumented SQL to Jira automation, documented and hardened it, and grew it into scheduled integrations and an executive OKR dashboard.',
      'Handle 200+ IT tickets a year through a Helpdesk pipeline I designed, answering within 24 hours with fewer than 10% resolved late.',
      "Moved the codebase from SVN to Git and introduced Scrum as the team's first Scrum Master.",
      'Started the social committee and still run it: a dozen events a year, the holiday party, and the occasional blood drive.',
    ],
  },
  {
    company: 'MARU/Matchbox',
    title: ['Survey Programmer', 'Senior Survey Programmer', 'Team Lead - Programming'],
    period: ['February 2015 - July 2017', 'July 2017 - July 2018', 'July 2018 - December 2018'],
    points: [
      'Used C#/Lua and HTML/CSS/JavaScript with in-house applications to script complex logic into surveys.',
      'Worked with Fortune 500 accounts across time zones on tight programming deadlines.',
      'Coordinated discovery and strategic calls with stakeholders, reducing turnaround time per country by 10%.',
      'Built efficiency tools, including one adopted company-wide that cut average project programming time by 30%.',
      'Trained employees on the team’s tools and software.',
      'Led the social committee, keeping office events running through a year of 25% staff turnover.',
    ],
  },
  {
    company: 'daVinci Retail',
    title: ['Graphic Designer'],
    period: ['May 2014 - August 2014'],
    points: [
      'Created graphics and icons in Photoshop and Illustrator for the development and marketing teams.',
      'Designed layouts for the website and desktop/mobile applications.',
      'Worked with developers to translate designs into working applications.',
      'Developed templates and color schemes for marketing campaigns.',
      'Produced user guide videos in Premiere for desktop and mobile applications.',
    ],
  },
  {
    company: 'Softchoice',
    title: ['Cloud Development Associate'],
    period: ['September 2012 - August 2013'],
    points: [
      'Built proof of concept tools that integrated SaaS APIs and authentication systems.',
      'Maintained and updated the portal for accessing corporate applications (Okta).',
      'Resolved issues regarding SaaS applications and cloud services.',
      'Created documentation and trained departments on new systems.',
    ],
  },
  {
    company: 'Maxwell Photography',
    title: ['Technical Specialist'],
    period: ['2007 - Present'],
    points: [
      'Edited and printed photographs, ensuring timely delivery to students.',
      'Improved communication skills by working with staff and students.',
      'Used Adobe Photoshop and Lightroom to edit photographs.',
      'Developed problem-solving skills by handling computer and technical issues.',
    ],
  },
]

const EDUCATION: Education = {
  degree: 'Bachelor of Science',
  school: 'University of Toronto Scarborough',
  date: 'Graduated 2014',
}

function Resume({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div ref={ref}>
      <Section title="SKILLS" content={{ type: 'Skills', skills: SKILLS }} />
      <Section title="EXPERIENCE" content={{ type: 'Experience', jobs: EXPERIENCES }} />
      <Section title="EDUCATION" content={{ type: 'Education', education: EDUCATION }} />
    </div>
  )
}

export default Resume
