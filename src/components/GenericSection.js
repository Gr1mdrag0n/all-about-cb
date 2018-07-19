import React from 'react';

class GenericSection extends React.Component {
    render() {
        return <div className="App-section-content">
            {Object.keys(this.props.content).map(key => (
              <p key={key}>{this.props.content[key]}</p>
            ))}
          </div>;
    }
}

export default GenericSection;