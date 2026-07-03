import type { SkillGroups } from '../types'

function GenericSection({ content }: { content: SkillGroups }) {
  return (
    <div className="App-section-content">
      {Object.entries(content).map(([category, items]) => (
        <div key={category}>
          <p>
            {category}: {items.join(', ')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default GenericSection
