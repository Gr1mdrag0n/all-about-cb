import React from "react";
import "../css/App.css";
import AboutSection from "./AboutSection";
import headshot from "../assets/headshot.jpg";
import landscape from "../assets/about.jpg";
import camera from "../assets/camera.jpg";

class AboutMe extends React.Component {
  state = {
    notes: [
      [
        "Hey!  My name is Caradec Bisesar.  I’m a ",
        <span className="highlight resume">Software Developer</span>,
        " who also has a passion for ",
        <span className="highlight home">Design</span>,
        " and ",
        <span className="highlight contact">Photography</span>,
        ".  I began studying Computer Science in high school, and ever since, I’ve always enjoyed coding and automating daily tasks.  I’ve worked with many programming languages, though the ",
        <span className="highlight resume">
          languages I’m most comfortable with are C# and JavaScript
        </span>,
        "."
      ],
      [
        "My hobbies include ",
        <span className="">photography</span>,
        ", ",
        <span className="">gaming</span>,
        " - both electronic and board, and ",
        <span className="highlight aboutme">whisk(e)y tasting</span>,
        ".  I joined the photography world in high school as a Technical Specialist.  This originally involved work with ",
        <span className="highlight contact">Adobe Photoshop</span>,
        " and ",
        <span className="highlight contact">Lightroom</span>,
        ", however in recent years I’ve begun to take photos of my own.  I also have a passion for ",
        <span className="highlight home">design</span>,
        " and ",
        <span className="highlight home">implementing beautiful user interfaces</span>,
        ", which has been fueled by many years of work in photography."
      ],
      [
        "I'm quick, naturally curious, and always looking to learn new things.  I've been practicing ",
        <a href="https://www.duolingo.com/Gr1mdrag0n" rel="noopener noreferrer" target="_blank">
          French
        </a>,
        " for a few years, and have now started to pick up Spanish.  When not online, you'll find me tinkering with code, editing photos, ",
        <a href="https://www.google.com/search?q=enjoying+a+dram" rel="noopener noreferrer" target="_blank">
          enjoying a dram
        </a>,
        ", or staring off into the distance while posing for pictures."
      ]
    ],
    images: [headshot, camera, landscape]
  };
  render() {
    return (
      <div>
        <div className="spacer mobile" />
        {Object.keys(this.state.notes).map(key => (
          <AboutSection
            key={key}
            flipped={key % 2 === 1}
            title={
              <img src={this.state.images[key]} className="App-about" alt="" />
            }
            content={[this.state.notes[key]]}
          />
        ))}
      </div>
    );
  }
}

export default AboutMe;