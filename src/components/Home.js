import React from 'react';
import InfoBox from './InfoBox';

class Home extends React.Component {
  render() {
    return <div className="App-home">
      <div className="spacer" />
      <div className="Home-title">Hello, my name is Caradec.</div>
      <div className="Home-subtitle1">What do I do?</div>
      <InfoBox />
      <div className="spacer" />
    </div>;
  }
}

export default Home;