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
          'Effectively use C#/lua and HTML/CSS/JavaScript in combination with in-house applications to script complex logic into surveys',
          'Worked with Fortune 500 key accounts across time-zones to meet demanding timelines and deliver scalable solutions',
          'Coordinated discovery and strategic calls with both internal and external stakeholders which lead to beating the original turnaround time per country by 10% (1 week)',
          'Developed multiple efficiency protocols and tools, including one which is now used company wide and has reduced the average project programming time by 30%',
          'In charge of training both new and existing employees on how to most efficiently use various tools and software',
          'Integral contributor in multiple office wide events as the head of the social committee resulting in an increase in CSAT despite a time of 25% churn',
        ],
        show: true,
      },
      {
        company: 'daVinci Retail',
        title: ['Graphic Designer'],
        period: ['May 2014 – August 2014'],
        points: [
          'Recognized for having a high level of proficiency with Adobe Photoshop, Illustrator and Premiere',
          'Created highly detailed graphics and icons for both the development and marketing team to enhance the quality of the user interface',
          'Designed intuitive layouts for the main website and the desktop/mobile applications',
          'Worked with a team of developers to translate designs and concepts into working applications',
          'Developed templates and color schemes which were used in the email marketing campaign and PowerPoint presentations ',
          'Produced simple user guide videos for both desktop and mobile applications',
        ],
        show: true,
      },
      {
        company: 'Softchoice',
        title: ['Cloud Development Associate'],
        period: ['September 2012 – August 2013'],
        points: [
          'Commended for being a quick learner, high quality of work, and dependability for any given task',
          'Successfully created new tools via integrating Software as a Service (SaaS) application API’s and various authentication methods to enhance existing services',
          'Routinely maintained and updated the portal for accessing corporate applications (Okta) to ensure employees are able to easily access their tools',
          'Developed Proof of Concept tools utilizing SaaS applications and Cloud services which were presented to senior management',
          'Effectively resolved issues regarding SaaS applications and Cloud Services',
          'Created documentation and trained departments on adopting/utilizing new systems',
        ],
        show: true,
      },
      {
        company: 'Maxwell Photography',
        title: ['Technical Specialist'],
        period: ['2007-Present'],
        points: [
          'Edited and printed photographs at a fast pace to guarantee students receive their photographs on time',
          'Improved communication skills by working with staff and students to provide the best possible service',
          'Interacted with parents in a friendly and courteous manner to sell photographs',
          'Used Adobe Photoshop and Lightroom to edit numerous photographs ensuring high quality and customer satisfaction',
          'Developed strong problem solving skills by quickly handling any computer or non-technical issues',
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
