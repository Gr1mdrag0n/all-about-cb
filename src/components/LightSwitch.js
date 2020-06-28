import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="lightSwitch hidden" onClick={this.props.toggleLights}>
                <i className="bulb fas fa-lightbulb"></i>
            </div>
        );
    }
}

export default Sidebar;