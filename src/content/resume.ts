// The Paperwork: resume content, plus the Toolbox and education.

export interface Role {
  title: string
  period: string
  past?: boolean
}

export interface Entry {
  company: string
  when: string
  location: string
  roles: Role[]
  bullets: string[]
}

export const ENTRIES: Entry[] = [
  {
    company: 'CEM Benchmarking',
    when: '2019 – Present',
    location: 'Toronto',
    roles: [
      { title: 'Director, Engineering · July 2026 – Present', period: '' },
      { title: 'Senior Engineer & Team Lead · July 2023 – July 2026', period: '', past: true },
      { title: 'Software Engineer · January 2019 – July 2023', period: '', past: true },
    ],
    bullets: [
      'Lead a growing engineering team through 60+ Scrum sprints, from planning and estimation through review and release.',
      'Manage releases across the product suite, with a reputation for catching stale branches and bad data before they ship.',
      'Took our client data collection platform from first scoping conversations to its first live collection cycle with major UK pension funds.',
      'Own IT security for the company, from identity and endpoint management to network security, including security reviews with our largest institutional clients.',
      'Built the sprint analytics tool behind our 1:1s in React and TypeScript, tracking velocity, review load, and carryover each sprint.',
      'Inherited an undocumented SQL to Jira automation, documented and hardened it, and grew it into scheduled integrations and an executive OKR dashboard.',
      'Handle 200+ IT tickets a year through a Helpdesk pipeline I designed, answering within 24 hours with fewer than 10% resolved late.',
      'Moved the codebase from SVN to Git and introduced Scrum, taking on the team’s first Scrum Master role.',
      'Started the social committee and still run it: a dozen events a year, the holiday party, and the occasional blood drive.',
    ],
  },
  {
    company: 'MARU/Matchbox',
    when: '2015 – 2018',
    location: 'Toronto',
    roles: [
      { title: 'Team Lead, Programming · July 2018 – December 2018', period: '' },
      { title: 'Senior Survey Programmer · July 2017 – July 2018', period: '', past: true },
      { title: 'Survey Programmer · February 2015 – July 2017', period: '', past: true },
    ],
    bullets: [
      'Used C#/Lua and HTML/CSS/JavaScript with in-house applications to script complex logic into surveys.',
      'Worked with Fortune 500 key accounts across time zones to meet demanding timelines and deliver scalable solutions.',
      'Coordinated discovery and strategic calls with stakeholders, reducing turnaround time per country by 10%.',
      'Developed efficiency protocols and tools, including one used company-wide that reduced average project programming time by 30%.',
      'Trained employees on how to efficiently use various tools and software.',
      'Led the social committee, organizing office events and increasing CSAT despite a 25% churn.',
    ],
  },
  {
    company: 'daVinci Retail',
    when: '2014',
    location: 'Toronto',
    roles: [{ title: 'Graphic Designer', period: '' }],
    bullets: [
      'Proficient in Adobe Photoshop, Illustrator, and Premiere.',
      'Created graphics and icons for the development and marketing teams.',
      'Designed layouts for the website and desktop/mobile applications.',
      'Worked with developers to translate designs into working applications.',
      'Developed templates and color schemes for marketing campaigns.',
      'Produced user guide videos for desktop and mobile applications.',
    ],
  },
  {
    company: 'Softchoice',
    when: '2012 – 2013',
    location: 'Toronto',
    roles: [{ title: 'Cloud Development Associate', period: '' }],
    bullets: [
      'Created new tools by integrating SaaS application APIs and authentication methods.',
      'Maintained and updated the portal for accessing corporate applications (Okta).',
      'Developed Proof of Concept tools utilizing SaaS applications and Cloud services.',
      'Resolved issues regarding SaaS applications and Cloud Services.',
      'Created documentation and trained departments on new systems.',
    ],
  },
  {
    company: 'Maxwell Photography',
    when: '2007 – Present',
    location: 'Toronto',
    roles: [{ title: 'Technical Specialist', period: '' }],
    bullets: [
      'Edit and print photographs, ensuring timely delivery to students.',
      'Improve communication skills by working with staff and students.',
      'Use Adobe Photoshop and Lightroom to edit photographs.',
      'Develop problem-solving skills by handling computer and technical issues.',
    ],
  },
]

export const TOOLBOX: [string, string][] = [
  ['Languages & Frameworks', 'TypeScript, JavaScript, React, C#, ASP.NET Core, Python, SQL, HTML, CSS'],
  ['Software & Tools', 'Git & GitHub, Jira administration & automation, Azure / Entra ID, SQL Server, Node, Vite, IIS, Photoshop, Lightroom'],
  ['Leadership', 'Agile & Scrum (CSM, CPO), release management, capacity planning, stakeholder management'],
  ['Security', 'Identity & endpoint management, network security, due-diligence reviews, disaster recovery planning'],
]

export const EDUCATION = {
  degree: 'Bachelor of Science',
  school: 'University of Toronto Scarborough, 2014',
  detail: 'Computer Science Specialist (Co-op), Software Engineering Stream · Minor in Mathematics',
}
