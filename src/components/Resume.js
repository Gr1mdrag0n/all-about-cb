import React from 'react';
import Section from "./Section";

class Resume extends React.Component {
  state = {
    skills: [
      "Experienced with C#, Java, Python, Eclipse, Visual Studio, SVN, Git",
      "Extensive knowledge of image editing software such as Adobe Photoshop and Lightroom",
      "Abundant experience solving computer issues both hardware and software related ",
      "Thorough understanding of the Software Development Life-Cycle and software development methods such as Agile",
      "Work well with Microsoft Windows, Mac OS X, Unix (Solaris), Linux (Ubuntu)"
    ],
    experiences: [
      {
        company: "CEM Benchmarking",
        title: [
          "Software Engineer"
        ],
        period: [
          "January 2019 - Present"
        ],
        points: [
          'Migrated the existing Excel and PDF reports online using React to provide an updated experience and boost revenue',
          'Designed and implemented a full featured and user-friendly interface for both analysts and clients',
          'Engaged in design and architecture discussions with both internal and external parties',
          'Responsible for day to day IT support, networking, and hardware, including regular maintenance of machines and servers',
          'Collaborated with the marketing team to design logos and videos to promote new offerings and help instruct new users',
        ],
        show: true
      },
      {
        company: "MARU/Matchbox",
        title: [
          "Survey Programmer",
          "Senior Survey Programmer",
          "Team Lead - Programming"
        ],
        period: [
          "Feburary 2015 - July 2017",
          "July 2017 - July 2018",
          "July 2018 - December 2018"
        ],
        points: [
          "Effectively use C#/lua and HTML/CSS/JavaScript in combination with in-house applications to script complex logic into surveys",
          "Worked with Fortune 500 key accounts across time-zones to meet demanding timelines and deliver scalable solutions",
          "Coordinated discovery and strategic calls with both internal and external stakeholders which lead to beating the original turnaround time per country by 10% (1 week)",
          "Developed multiple efficiency protocols and tools, including one which is now used company wide and has reduced the average project programming time by 30%",
          "In charge of training both new and existing employees on how to most efficiently use various tools and software",
          "Integral contributor in multiple office wide events as the head of the social committee resulting in an increase in CSAT despite a time of 25% churn"
        ],
        show: true
      },
      {
        company: "daVinci Retail",
        title: ["Graphic Designer"],
        period: ["May 2014 – August 2014"],
        points: [
          "Recognized for having a high level of proficiency with Adobe Photoshop, Illustrator and Premiere",
          "Created highly detailed graphics and icons for both the development and marketing team to enhance the quality of the user interface",
          "Designed intuitive layouts for the main website and the desktop/mobile applications",
          "Worked with a team of developers to translate designs and concepts into working applications",
          "Developed templates and color schemes which were used in the email marketing campaign and PowerPoint presentations ",
          "Produced simple user guide videos for both desktop and mobile applications"
        ],
        show: true
      },
      {
        company: "Softchoice",
        title: ["Cloud Development Associate"],
        period: ["September 2012 – August 2013"],
        points: [
          "Commended for being a quick learner, high quality of work, and dependability for any given task",
          "Successfully created new tools via integrating Software as a Service (SaaS) application API’s and various authentication methods to enhance existing services",
          "Routinely maintained and updated the portal for accessing corporate applications (Okta) to ensure employees are able to easily access their tools",
          "Developed Proof of Concept tools utilizing SaaS applications and Cloud services which were presented to senior management",
          "Effectively resolved issues regarding SaaS applications and Cloud Services",
          "Created documentation and trained departments on adopting/utilizing new systems"
        ],
        show: true
      },
      {
        company: "Maxwell Photography",
        title: ["Technical Specialist"],
        period: ["2007-Present"],
        points: [
          "Edited and printed photographs at a fast pace to guarantee students receive their photographs on time",
          "Improved communication skills by working with staff and students to provide the best possible service",
          "Interacted with parents in a friendly and courteous manner to sell photographs",
          "Used Adobe Photoshop and Lightroom to edit numerous photographs ensuring high quality and customer satisfaction",
          "Developed strong problem solving skills by quickly handling any computer or non-technical issues"
        ],
        show: true
      }
    ],
    education: {
      degree: "Bachelor of Science",
      school: "University of Toronto Scarborough",
      date: "Graduated 2014"
    },
    showMoreState: false
  };

  showMore = () => {
    const experiences = { ...this.state.experiences };
    Object.keys(experiences).forEach(key => {
      experiences[key].show = true;
    });
    this.setState({ experiences, showMoreState: false });
  };

  render() {
    return (
      <div>
        {/* <ResumeHeader info={this.props.info} /> */}
        <div className="spacer"></div>
        <Section title={"SKILLS"} type={"Skills"} content={this.state.skills} />
        <Section
          title={"EXPERIENCE"}
          showMore={this.showMore}
          showMoreState={this.state.showMoreState}
          type={"Experience"}
          content={this.state.experiences}
        />
        <Section
          title={"EDUCATION"}
          type={"Education"}
          content={this.state.education}
        />
        {/* <Footer info={this.props.info} /> */}
      </div>
    );
  }
}

export default Resume;