function CatSilhouette() {
  return (
    <svg viewBox="0 0 32 28" aria-hidden="true">
      <polygon className="fur" points="4,11 9,0 13,10" />
      <polygon className="fur" points="19,10 23,0 28,11" />
      <circle className="fur" cx="16" cy="17" r="11" />
      <circle className="eye" cx="11.5" cy="16" r="1.3" />
      <circle className="eye" cx="20.5" cy="16" r="1.3" />
      <polygon className="eye" points="14.7,20 17.3,20 16,21.8" />
    </svg>
  )
}

export default CatSilhouette
