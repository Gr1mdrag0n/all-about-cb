import React from 'react';

class Footer extends React.Component {
  render() {
      return <div>
          {/* <div className="phantom" /> */}
          <div className="footer">
            <div className="left">© 2018 Caradec Bisesar</div>
            <div className="right">
            <a href={"mailto:" + this.props.info.email}>
                {this.props.info.email}
              </a>
            </div>
          </div>
        </div>;
  }
}

export default Footer;