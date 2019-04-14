import React from "react";
import "../css/App.css";

class Contact extends React.Component {
    state = {
        notes: [
            "My name is Caradec Bisesar.  I’m a recent graduate who completed a Specialist in Software Engineering at the University of Toronto: Scarborough Campus.  I began studying Computer Science in high school and ever since, I’ve always enjoyed coding and automating daily tasks.  I’ve worked with many programming languages, though the languages I’m most comfortable with are Java, C and C#.",
            "My hobbies include photography, video games, computer repair, and whiskey tasting.  I joined the photography world in high school as a technical worker.  This involved extensive work with Adobe Photoshop/Lightroom.  In recent years I’ve begun to take photos of my own.  I also have a large collection of video games, movies, T.V. series, and whiskeys.",
            "I also have a strong interesting in graphic design and designing user interfaces.  This passion has been fueled by my many years of work in photography, along with my personal work with Adobe Photoshop.  Graphic design has also been a strong interest of mine after taking a few courses throughout my years at university."
        ]
    }

    render() {
        return (
            <div className="App-contact">
                <a className="fivehundredpx icon" href="http://500px.com/cbisesar" rel="noopener noreferrer" target="_blank"><span className="hidden">500px</span></a>
                <a className="facebook icon" href="https://www.facebook.com/Gr1mdrag0n" rel="noopener noreferrer" target="_blank"><span className="hidden">Facebook</span></a>
                <a className="linkedin icon" href="http://lnkd.in/tVbZ6W" rel="noopener noreferrer" target="_blank"><span className="hidden">LinkedIn</span></a>
                <a className="mail icon" href="mailto:c.bisesar@gmail.com" rel="noopener noreferrer" target="_blank"><span className="hidden">Email</span></a>
            </div>
        );
    }
}

export default Contact;