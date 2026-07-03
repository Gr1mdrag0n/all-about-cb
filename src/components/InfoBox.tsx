import csharpIcon from '../assets/csharp.png'
import dotNetIcon from '../assets/dotNet.png'
import javascriptIcon from '../assets/javascript.png'
import reactIcon from '../assets/react.png'
import photoshopIcon from '../assets/photoshop.png'
import lightroomIcon from '../assets/lightroom.png'

const COLUMNS = [
  {
    title: 'Back-End',
    icons: [csharpIcon, dotNetIcon],
    highlight: 'highlight resume',
  },
  {
    title: 'Front-End',
    icons: [javascriptIcon, reactIcon],
    highlight: 'highlight home',
  },
  {
    title: 'Photography',
    icons: [photoshopIcon, lightroomIcon],
    highlight: 'highlight contact',
  },
]

function InfoBox() {
  return (
    <div className="InfoBox">
      {COLUMNS.map((column) => (
        <div key={column.title} className="InfoColumn">
          <div className={'title ' + column.highlight}>
            <span>{column.title}</span>
          </div>
          {column.icons.map((icon) => (
            <div key={icon}>
              <div>
                <img src={icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default InfoBox
