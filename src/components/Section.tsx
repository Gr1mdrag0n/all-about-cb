import type { Education, Job, SkillGroups } from '../types'
import Experience from './Experience'
import EducationSection from './Education'
import GenericSection from './GenericSection'

type SectionContent =
  | { type: 'Skills'; skills: SkillGroups }
  | { type: 'Experience'; jobs: Job[] }
  | { type: 'Education'; education: Education }

function Section({ title, content }: { title: string; content: SectionContent }) {
  let body
  if (content.type === 'Experience') {
    body = <Experience jobs={content.jobs} />
  } else if (content.type === 'Education') {
    body = <EducationSection education={content.education} />
  } else {
    body = <GenericSection content={content.skills} />
  }

  return (
    <div className="App-section">
      <div className="App-section-title">{title}</div>
      {body}
    </div>
  )
}

export default Section
