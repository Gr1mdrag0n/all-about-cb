import React from 'react';
import print from '../assets/print.png';
import email from '../assets/email.png';
import resume from '../assets/Resume.pdf';

class Icons extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isBottom: false
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let isBottom = ((window.innerHeight + window.scrollY) > (document.body.offsetHeight - 50));
            if (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape") isBottom = window.innerHeight + window.pageYOffset > document.body.offsetHeight - 80;
            if (isBottom !== this.state.isBottom) {
                this.setState({ isBottom });
              }
        });
    }

    printPDF() {
        var w = window.open(resume);
        w.print();
        // if (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape") window.print();
        // else w.print();
    }

    render() {
        return <div className={"persistentIcons" + (this.state.isBottom ? " shifted" : "") }>
            <img src={print} onClick={this.printPDF} alt="" />
            <a href={"mailto:" + this.props.info.email}>
              <img src={email} alt="" />
            </a>
          </div>;
    }
}

export default Icons;