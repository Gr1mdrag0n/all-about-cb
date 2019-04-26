import React from 'react';
import ReactDOM from "react-dom";

class Sidebar extends React.Component {

    render() {
        return (
            <div className="lightSwitch" onClick={this.props.toggleLights}>
                <i class="bulb fas fa-lightbulb"></i>
            </div>
        );
    }
}

export default Sidebar;