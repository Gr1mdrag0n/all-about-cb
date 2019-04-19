import React from 'react';
import csharpIcon from '../assets/csharp.png';
import dotNetIcon from '../assets/dotNet.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import photoshopIcon from '../assets/photoshop.png';
import lightroomIcon from '../assets/lightroom.png';

class InfoBox extends React.Component {
  state = {
    info: [
      {
        title: "Back-End",
        icons: [
          csharpIcon,
          dotNetIcon
        ],
        highlight: "highlight resume"
      },
      {
        title: "Front-End",
        icons: [
          javascriptIcon,
          reactIcon
        ],
        highlight: "highlight home"
      },
      {
        title: "Photography",
        icons: [
          photoshopIcon,
          lightroomIcon
        ],
        highlight: "highlight contact"
      }
    ]
  };

  render() {
    return <div className="InfoBox">
      {Object.keys(this.state.info).map(key => (
        <div key={key} className="InfoColumn">
          <div key={"title" + key} className={"title " + this.state.info[key].highlight}>
            {this.state.info[key].title}
          </div>
          {Object.keys(this.state.info[key].icons).map(key2 => (
            <div key={key2}>
              <div><img src={this.state.info[key].icons[key2]} alt="" /></div>
            </div>
          ))}
        </div>
      ))}
    </div>;
  }
}

export default InfoBox;