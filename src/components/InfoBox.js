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
        info: [
            <div><img src={csharpIcon} alt=""/></div>,
            <div><img src={dotNetIcon} alt=""/></div>
        ],
        highlight: "highlight resume"
      },
    {
        title: "Front-End",
        info: [
            <div><img src={javascriptIcon} alt="" /></div>,
            <div><img src={reactIcon} alt="" /></div>
        ],
        highlight: "highlight home"
    },
      {
        title: "Photography",
          info: [
              <div><img src={photoshopIcon} alt="" /></div>,
              <div><img src={lightroomIcon} alt="" /></div>
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
            {Object.keys(this.state.info[key].info).map(key2 => (
                <div key={key2}>
                    {this.state.info[key].info[key2]}
                </div>
            ))}
          </div>
        ))}
      </div>;
  }
}

export default InfoBox;