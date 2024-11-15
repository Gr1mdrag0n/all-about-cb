import React from 'react'

class GenericSection extends React.Component {
  render() {
    const { content } = this.props

    if (typeof content === 'object') {
      return (
        <div className='App-section-content'>
          {Object.keys(content).map((category) => (
            <div key={category}>
              <p>
                {category}: {/* Category included in the text */}
                {content[category].map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < content[category].length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div className='App-section-content'>
          <p>{content}</p>
        </div>
      )
    }
  }
}

export default GenericSection
