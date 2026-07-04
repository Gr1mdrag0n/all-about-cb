function CatSilhouette() {
  return (
    <svg viewBox="0 0 40 26" aria-hidden="true">
      <path className="tail" d="M33 23 q7 -3 4.5 -11" />
      <ellipse className="fur" cx="25" cy="19" rx="9" ry="7" />
      <circle className="fur" cx="12" cy="12" r="6" />
      <polygon className="fur" points="7.2,9 8,2.5 12,6.5" />
      <polygon className="fur" points="12.5,6 16.5,2.5 16.8,9" />
      <circle className="eye" cx="10" cy="11.5" r="1.1" />
      <circle className="eye" cx="14.2" cy="11.5" r="1.1" />
    </svg>
  )
}

export default CatSilhouette
