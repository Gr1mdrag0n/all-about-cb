import React from 'react';

class Experience extends React.Component {
    render() {
        return <div className="App-section-wrapper">
            {Object.keys(this.props.content)
                .map(key => <div key={key} className={"App-section-content" + (this.props.content[key].show ? '' : '-hidden')} >
                  <p key={this.props.content[key].company + key} className="posCompany">{this.props.content[key].company}</p>
                  {Object.keys(this.props.content[key].title).map(key2 => (
                    <p key={this.props.content[key].company + key + key2} className="posTitle">{this.props.content[key].title[key2]}, {this.props.content[key].period[key2]}</p>
                    ))}
                  {Object.keys(this.props.content[key].points).map(
                    key2 => (
                      <p key={this.props.content[key].company + key + key2} className="expInfo" >
                        <span className="highlight">•</span>{" "}
                        {this.props.content[key].points[key2]}
                      </p>
                    )
                  )}
                </div>)}
            {this.props.showMoreState ? <button onClick={this.props.showMore}>Show More</button> : null}
        
          </div>;
    }
}

export default Experience;