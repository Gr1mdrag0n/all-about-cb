function LightSwitch({ toggleLights }: { toggleLights: () => void }) {
  return (
    <div className="lightSwitch" onClick={toggleLights}>
      <i className="bulb fas fa-lightbulb"></i>
    </div>
  )
}

export default LightSwitch
