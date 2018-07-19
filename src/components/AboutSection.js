import React from 'react';

class AboutSection extends React.Component {

    render() {
        let finalOrder = (
            <div className="App-about-section">
                <div className="App-about-section-title">{this.props.title}</div>
                <div className="App-about-content">
                    {Object.keys(this.props.content).map(key => (
                        <p key={key}>{this.props.content[key]}</p>
                    ))}
                </div>
            </div>
        );

        if (this.props.flipped) {
            finalOrder = (
                <div className="App-about-section flipped">
                    <div className="App-about-content">
                        {Object.keys(this.props.content).map(key => (
                            <p key={key}>{this.props.content[key]}</p>
                        ))}
                    </div>
                    <div className="App-about-section-title">{this.props.title}</div>
                </div>
            );
        }
        return finalOrder;
    }
}

export default AboutSection;