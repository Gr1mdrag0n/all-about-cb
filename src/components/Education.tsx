import type { Education as EducationInfo } from '../types'

function Education({ education }: { education: EducationInfo }) {
  return (
    <div className="App-section-content">
      <div>
        <p>
          <strong>{education.degree}</strong>
        </p>
        <p>{education.school}</p>
        <p>{education.date}</p>
      </div>
    </div>
  )
}

export default Education
