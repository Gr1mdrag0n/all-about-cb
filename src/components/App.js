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
import LightSwitch from './LightSwitch';

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
    this.toggleLights = this.toggleLights.bind(this);
  }

  state = {
    info: {
      firstName: "Caradec",
      lastName: "Bisesar",
      Name: "Caradec Bisesar",
      email: "c.bisesar@gmail.com"
    },
    current: "Home",
    isTop: true,
    lights: true
  };

  toggleLights() {
    this.setState({
      lights: !this.state.lights
    })
  }

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
    return <div className={"App " + (this.state.lights ? "" : "dark")}>
      <Header info={this.state.info} pathname={this.props.location.pathname} allRefs={this.allRefs} isTop={this.props.isTop} toggleLights={this.toggleLights} lights={this.state.lights} />
      <Sidebar pathname={this.props.location.pathname} allRefs={this.allRefs} isTop={this.props.isTop} />
      <LightSwitch toggleLights={this.toggleLights} lights={this.state.lights} />
      <Home ref={this.homeRef} />
      <Divider type={"resume"} content={[<span className="flicker">W</span>, "ant ", <span className="flicker">to</span>, " kn", <span className="flicker">ow</span>, " more", <span className="flicker">?</span>]} />
      <Resume ref={this.resumeRef} info={this.state.info} />
      <Divider type={"aboutme"} content={[<span className="flicker">A</span>, "b", <span className="flicker">ou</span>, "t ", <span className="flicker">Me</span>]} />
      <AboutMe ref={this.aboutmeRef} />
      <Divider type={"contact"} ref={this.contactRef} content={[<span className="flicker">Fi</span>, <span className="flicker">nd</span>, " ", <span className="flicker">Me</span>]} />
      <Contact />
      <Footer info={this.state.info} />
      <Icons info={this.state.info} />
    </div>;
  }
}

export default App;
