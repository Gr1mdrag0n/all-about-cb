import React from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Toggle from 'react-bootstrap-toggle';

class Header extends React.Component {

  constructor(props) {

    super(props)

    let pathname = this.props.pathname.toLowerCase().substring(1);

    if (pathname === '') {
      pathname = "home";
    }

    this.state = {
      hover: pathname,
      isTop: true,
      active: [
        true,
        false,
        false,
        false
      ],
      names: [
        'home',
        'resume',
        'aboutme',
        'contact'
      ]
    };

    this.updateHoverState = this.updateHoverState.bind(this)
  }

  updateHoverState(hover) {
    this.setState({ hover })
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isTop = window.scrollY < 200;
      if (navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape") isTop = window.pageYOffset < 200;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
      let set = false;
      let activeIdx = -1;
      Object.keys(this.refs).reverse().forEach((element, idx) => {
        let testNode = ReactDOM.findDOMNode(this.props.allRefs[3 - idx].current);
        let distanceToTop = testNode.getBoundingClientRect().top;
        if (distanceToTop <= 500 && !set) {
          set = true;
          this.setState({ activeKey: 4 - idx });
          let navNode = ReactDOM.findDOMNode(this.refs[Object.keys(this.refs)[3 - idx]]);
          navNode.classList.add("active");
          activeIdx = 3 - idx;
          this.updateHoverState(this.state.names[3 - idx]);
        }
      });
      for (let idx = 0; idx < 4; idx++) {
        if (idx !== activeIdx) {
          let navNode = ReactDOM.findDOMNode(this.refs[Object.keys(this.refs)[idx]]);
          navNode.classList.remove("active");
        }
      }
    });
  }

  onClickScroll = (event, idx) => {
    // event.preventDefault();
    let testNode = ReactDOM.findDOMNode(this.props.allRefs[idx - 1].current);
    if (testNode) {
      testNode.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start"
      });
    }
  }

  render() {
    let pathname = this.props.pathname.toLowerCase().substring(1);

    return <Navbar inverse fixedTop collapseOnSelect className={this.state.isTop ? "" : "collapsed " + this.state.hover}>
      <Navbar.Header>
        <Navbar.Brand className={this.state.isTop ? "" : "collapsed"}>
          <Link to={{ pathname: "/Home", state: { fromDashboard: true } }} className="home" onMouseEnter={() => this.updateHoverState("home")} onMouseLeave={() => this.updateHoverState(pathname)} onClick={e => this.onClickScroll(e, 1)}>
            Caradec Bisesar
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight className={this.state.isTop ? "" : "collapsed"}>
          <LinkContainer to={"#Home"}>
            <NavItem eventKey={1} className="home" ref="homeNav" onMouseEnter={() => this.updateHoverState("home")} onMouseLeave={() => this.updateHoverState(pathname)} onClick={e => this.onClickScroll(e, 1)}>
              Home
              </NavItem>
          </LinkContainer>
          <LinkContainer to={"#Resume"}>
            <NavItem eventKey={2} className="resume" ref="resumeNav" onMouseEnter={() => this.updateHoverState("resume")} onMouseLeave={() => this.updateHoverState(pathname)} onClick={e => this.onClickScroll(e, 2)}>
              Resume
              </NavItem>
          </LinkContainer>
          <LinkContainer to={"#AboutMe"}>
            <NavItem eventKey={3} className="aboutMe" ref="aboutMeNav" onMouseEnter={() => this.updateHoverState("aboutme")} onMouseLeave={() => this.updateHoverState(pathname)} onClick={e => this.onClickScroll(e, 3)}>
              About Me
              </NavItem>
          </LinkContainer>
          <LinkContainer to={"#Contact"}>
            <NavItem eventKey={4} className="contact" ref="contactNav" onMouseEnter={() => this.updateHoverState("contact")} onMouseLeave={() => this.updateHoverState(pathname)} onClick={e => this.onClickScroll(e, 4)}>
              Contact
              </NavItem>
          </LinkContainer>
          <NavItem onClick={this.props.toggleLights}>
            Turn the lights {this.props.lights ? `off` : `on`} <i className="bulb fas fa-lightbulb"></i>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  }
}

export default Header;