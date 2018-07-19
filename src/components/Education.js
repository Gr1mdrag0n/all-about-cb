import React from 'react';

class Education extends React.Component {

    render() {
        return <div className="App-section-content">
            <div>
              <p>
                <strong>{this.props.content.degree}</strong>
              </p>
              <p>{this.props.content.school}</p>
              <p>{this.props.content.date}</p>
            </div>
          </div>;
    }
}

export default Education;