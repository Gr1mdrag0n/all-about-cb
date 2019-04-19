import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header-Nav';
import Footer from './Footer';
import Home from './Home';
import Resume from './Resume';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Divider from './Divider';
import Icons from './Icons';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.resumeRef = React.createRef();
    this.aboutmeRef = React.createRef();
    this.contactRef = React.createRef();
    this.allRefs = [
      this.homeRef,
      this.resumeRef,
      this.aboutmeRef,
      this.contactRef
    ]
  }

  state = {
    info: {
      firstName: "Caradec",
      lastName: "Bisesar",
      Name: "Caradec Bisesar",
      email: "c.bisesar@gmail.com"
    },
    current: "Home",
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isTop = window.scrollY < 200;
      if (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape") isTop = window.pageYOffset < 200;
      if (isTop !== this.state.isTop) {
        this.setState({
          isTop
        })
      }
    });
  }

  render() {
    console.log("V1.0.0");
    return <div className="App">
      <Header info={this.state.info} pathname={this.props.location.pathname} allRefs={this.allRefs} isTop={this.props.isTop} />
      <Sidebar pathname={this.props.location.pathname} allRefs={this.allRefs} isTop={this.props.isTop} />
      <Home ref={this.homeRef} />
      <Divider type={"resume"} content={"Want to know more?"} />
      <Resume ref={this.resumeRef} info={this.state.info} />
      <Divider type={"aboutme"} content={"About Me"} />
      <AboutMe ref={this.aboutmeRef} />
      <Divider type={"contact"} ref={this.contactRef} content={"Find Me"} />
      <Contact />
      <Footer info={this.state.info} />
      <Icons info={this.state.info} />
    </div>;
  }
}

export default App;
