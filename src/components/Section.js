import React from 'react';
import Experience from './Experience';
import Education from './Education';
import GenericSection from './GenericSection';

class Section extends React.Component {

    render() {

        let curType;

        if (this.props.type === "Experience") {
            curType = <Experience content={this.props.content} showMore={this.props.showMore} showMoreState={this.props.showMoreState} />;
        } else if (this.props.type === "Education") {
            curType = <Education content={this.props.content} />;
        } else {
            curType = <GenericSection content={this.props.content} />;
        }

        return <div className="App-section">
            <div className="App-section-title">{this.props.title}</div>
            {curType}
        </div>;
    }
}

export default Section;