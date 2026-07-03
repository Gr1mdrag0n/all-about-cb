import type { Job } from '../types'

function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <div className="App-section-wrapper">
      {jobs.map((job) => (
        <div key={job.company} className="App-section-content">
          <p className="posCompany">{job.company}</p>
          {job.title.map((title, idx) => (
            <p key={title} className="posTitle">
              {title}, {job.period[idx]}
            </p>
          ))}
          {job.points.map((point) => (
            <p key={point} className="expInfo">
              <span className="highlight">•</span> {point}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Experience
