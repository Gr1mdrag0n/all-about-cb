import React from 'react'
import Section from './Section'

class Resume extends React.Component {
  state = {
    skills: {
      'Programming Languages': [
        'JavaScript',
        'React',
        'HTML',
        'CSS',
        'C#',
        'Java',
      ],
      'Software & Tools': [
        'Visual Studio',
        'Git',
        'Jira',
        'Node',
        'SVN',
        'Adobe Photoshop',
        'Lightroom',
        'Microsoft Windows',
      ],
      Methodologies: [
        'Agile',
        'Scrum',
        'Certified Product Owner (CPO)',
        'Certified Scrum Master (CSM)',
        'Waterfall',
        'Software Development Life Cycle (SDLC)',
      ],
      Other: [
        'IT Support',
        'Networking',
        'Hardware Maintenance',
        'Cybersecurity',
        'Disaster Recovery Planning',
        'Training',
      ],
    },
    experiences: [
      {
        company: 'CEM Benchmarking',
        title: ['Software Engineer', 'Senior Engineer & Team Lead'],
        period: ['January 2019 - July 2023', 'July 2023 - Present'],
        points: [
          'Developed the front end for two company dashboards using React (one independently, one as developer and project manager).',
          "Migrated the company's codebase from SVN to Git, implementing standardized coding practices (pull requests, labels, versioning, deployment schedules).",
          'Spearheaded the transition to an agile workflow, implementing Scrum methodologies and assuming the Scrum Master role.',
          'Developed and implemented a new IT Helpdesk pipeline, improving response times (under 24 hours for requests, under 10% late resolutions).',
          'Maintain and manage the core Surveys platform, ensuring its stability, performance, and ongoing development.',
          'Engaged in design and architecture discussions with internal and external stakeholders to ensure solutions met business needs.',
          'Implemented Jira, automations, and documentation processes to streamline workflows and improve team efficiency.',
          "Initiated and contributed to the development of the company's cybersecurity program, including implementing new security practices and developing a company-wide InfoSec training plan.",
          'Fostered a strong team environment through open communication, collaboration, and social engagement.',
          'Provided day-to-day IT support, including networking, hardware maintenance, and troubleshooting.',
          'Collaborated with the marketing team on the design of logos and instructional videos.',
          "Founded and led the company's social committee, organizing monthly events, planning the annual holiday party, and coordinating initiatives like blood drives.",
        ],
        show: true,
      },
      {
        company: 'MARU/Matchbox',
        title: [
          'Survey Programmer',
          'Senior Survey Programmer',
          'Team Lead - Programming',
        ],
        period: [
          'Feburary 2015 - July 2017',
          'July 2017 - July 2018',
          'July 2018 - December 2018',
        ],
        points: [
          'Used C#/Lua and HTML/CSS/JavaScript with in-house applications to script complex logic into surveys.',
          'Worked with Fortune 500 key accounts across time zones to meet demanding timelines and deliver scalable solutions.',
          'Coordinated discovery and strategic calls with stakeholders, reducing turnaround time per country by 10%.',
          'Developed efficiency protocols and tools, including one used company-wide that reduced average project programming time by 30%.',
          'Trained employees on how to efficiently use various tools and software.',
          'Led the social committee, organizing office events and increasing CSAT despite a 25% churn.',
        ],
        show: true,
      },
      {
        company: 'daVinci Retail',
        title: ['Graphic Designer'],
        period: ['May 2014 – August 2014'],
        points: [
          'Proficient in Adobe Photoshop, Illustrator, and Premiere.',
          'Created graphics and icons for the development and marketing teams.',
          'Designed layouts for the website and desktop/mobile applications.',
          'Worked with developers to translate designs into working applications.',
          'Developed templates and color schemes for marketing campaigns.',
          'Produced user guide videos for desktop and mobile applications.',
        ],
        show: true,
      },
      {
        company: 'Softchoice',
        title: ['Cloud Development Associate'],
        period: ['September 2012 - August 2013'],
        points: [
          'Created new tools by integrating SaaS application APIs and authentication methods.',
          'Maintained and updated the portal for accessing corporate applications (Okta).',
          'Developed Proof of Concept tools utilizing SaaS applications and Cloud services.',
          'Resolved issues regarding SaaS applications and Cloud Services.',
          'Created documentation and trained departments on new systems.',
        ],
        show: true,
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
        show: true,
      },
    ],
    education: {
      degree: 'Bachelor of Science',
      school: 'University of Toronto Scarborough',
      date: 'Graduated 2014',
    },
    showMoreState: false,
  }

  showMore = () => {
    const experiences = { ...this.state.experiences }
    Object.keys(experiences).forEach((key) => {
      experiences[key].show = true
    })
    this.setState({ experiences, showMoreState: false })
  }

  render() {
    return (
      <div>
        <Section title={'SKILLS'} type={'Skills'} content={this.state.skills} />
        <Section
          title={'EXPERIENCE'}
          showMore={this.showMore}
          showMoreState={this.state.showMoreState}
          type={'Experience'}
          content={this.state.experiences}
        />
        <Section
          title={'EDUCATION'}
          type={'Education'}
          content={this.state.education}
        />
      </div>
    )
  }
}

export default Resume
