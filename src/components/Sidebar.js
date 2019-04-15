import React from 'react';
import ReactDOM from "react-dom";

class Sidebar extends React.Component {

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
        this.setState({
            hover
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
            let set = false;
            let activeIdx = -1;
            Object.keys(this.refs).reverse().forEach((element, idx) => {
                let testNode = ReactDOM.findDOMNode(this.props.allRefs[3 - idx].current);
                let distanceToTop = testNode.getBoundingClientRect().top;
                if (distanceToTop <= 650 && !set) {
                    set = true;
                    this.setState({
                        activeKey: 4 - idx
                    });
                    let navNode = ReactDOM.findDOMNode(this.refs[Object.keys(this.refs)[3 - idx]]);
                    navNode.classList.add("selected");
                    activeIdx = 3 - idx;
                    this.updateHoverState(this.state.names[3 - idx]);
                }
            });
            for (let idx = 0; idx < 4; idx++) {
                if (idx !== activeIdx) {
                    let navNode = ReactDOM.findDOMNode(this.refs[Object.keys(this.refs)[idx]]);
                    navNode.classList.remove("selected");
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

        return <div className={(this.state.isTop  ? "collapsed " : "") + "sidebar" }>
            <div className="ribbon sidebar-item home selected" ref="homeNav" onClick={e => this.onClickScroll(e, 1)}>Home</div>
            <div className="ribbon sidebar-item resume" ref="resumeNav" onClick={e => this.onClickScroll(e, 2)}>Resume</div>
            <div className="ribbon sidebar-item aboutme" ref="aboutMeNav" onClick={e => this.onClickScroll(e, 3)}>About Me</div>
            <div className="ribbon sidebar-item contact" ref="contactNav" onClick={e => this.onClickScroll(e, 4)}>Contact </div>
          </div>;
    }
}

export default Sidebar;