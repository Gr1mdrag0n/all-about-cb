import blackRussian from '../assets/drinks/blackRussian.svg'
import classicMartini from '../assets/drinks/classicMartini.svg'
import cucumberElderflowerGimlet from '../assets/drinks/cucumberElderflowerGimlet.svg'
import espressoMartini from '../assets/drinks/espressoMartini.svg'
import irishCoffee from '../assets/drinks/irishCoffee.svg'
import jagerbomb from '../assets/drinks/jagerbomb.svg'
import purpleRain from '../assets/drinks/purpleRain.svg'
import tequilaSunrise from '../assets/drinks/tequilaSunrise.svg'

const IMAGES: Record<string, string> = {
  blackRussian,
  classicMartini,
  cucumberElderflowerGimlet,
  espressoMartini,
  irishCoffee,
  jagerbomb,
  purpleRain,
  tequilaSunrise,
}

interface MenuItemProps {
  id: string
  name: string
  link?: string
  ingredients?: string[]
  compressed?: boolean
}

function MenuItem({ id, name, link, ingredients, compressed }: MenuItemProps) {
  const drinkImage = IMAGES[id] ?? IMAGES.blackRussian

  return (
    <div className={'menu-item' + (compressed ? ' compressed' : '')}>
      {!compressed && (
        <div className="item-img">
          <img src={drinkImage} className={id} alt="" />
        </div>
      )}
      <div className="item-name">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ) : (
          name
        )}
      </div>
      {ingredients && (
        <div className="item-content">
          <div className="item-ingredients">
            {ingredients.map((ingredient) => (
              <div key={ingredient} className="ingredient">
                {ingredient}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuItem
