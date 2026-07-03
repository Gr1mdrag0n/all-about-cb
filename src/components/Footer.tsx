import type { ContactInfo } from '../types'

function Footer({ info }: { info: ContactInfo }) {
  return (
    <div>
      <div className="footer">
        <div className="left">© {new Date().getFullYear()} {info.name}</div>
        <div className="right">
          <a href={'mailto:' + info.email}>{info.email}</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
