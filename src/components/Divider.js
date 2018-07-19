import React from 'react';

class Divider extends React.Component {
    render() {
        return <div className={"App-divider " + this.props.type}>
            {/* <div className="arrow top">
                <img src={arrowTop} alt="" />
            </div> */}
            <p className="divider-content">{this.props.content}</p>
            {/* <div className="arrow bottom">
              <img src={arrow} alt="" />
            </div> */}
          </div>;
    }
}

export default Divider;