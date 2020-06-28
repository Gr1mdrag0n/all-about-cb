import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
      
      super(props)
      
      let pathname = this.props.pathname.toLowerCase().substring(1);
      if (pathname === '') pathname = "home";
      
      this.state = { 
        hover: pathname,
        isTop: true
      };

      this.updateHoverState = this.updateHoverState.bind(this)
    }

    updateHoverState(hover) {
        this.setState({ hover })
    }

    componentDidMount() {
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY < 200;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop })
        }
      });
    }

    render() {
      let pathname = this.props.pathname.toLowerCase().substring(1);

      return <div className={"App-header " + this.state.hover + " navbar-fixed-top" + (this.state.isTop ? "" : " collapsed")}>
          <div className={"App-header-title" + (this.state.isTop ? "" : " collapsed")}>
            {this.props.info.firstName} <span>
              {this.props.info.lastName}
            </span>
          </div>
          <ul>
            <li>
              <Link to={{ pathname: "/Home", state: { fromDashboard: true } }} className="home" onMouseEnter={() => this.updateHoverState("home")} onMouseLeave={() => this.updateHoverState(pathname)}>
                Home
              </Link>
            </li>
            <li>
            <Link to={{ pathname: "/Resume", state: { fromDashboard: true } }} className="resume" onMouseEnter={() => this.updateHoverState("resume")} onMouseLeave={() => this.updateHoverState(pathname)}>
                Resume
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/AboutMe", state: { fromDashboard: true } }} className="aboutme" onMouseEnter={() => this.updateHoverState("aboutme")} onMouseLeave={() => this.updateHoverState(pathname)}>
                About Me
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/Contact", state: { fromDashboard: true } }} className="contact" onMouseEnter={() => this.updateHoverState("contact")} onMouseLeave={() => this.updateHoverState(pathname)}>
                Contact
              </Link>
            </li>
          </ul>
        <select name="navSelect" id="navSelect">
          <option value="home">Home</option>
          <option value="resume">Resume</option>
          <option value="aboutme">About Me</option>
          <option value="contact">Contact</option>
        </select>
        </div>;
    }
}

export default Header;