import '../css/Bar.css'
import MenuItem from './MenuItem'
import drinkData from '../constants/cocktails.json'

interface Drink {
  name: string
  ingredients?: string[]
  link?: string
  type?: string
  featured?: boolean
  ignore?: boolean
}

type DrinkMap = Record<string, Drink>

const data = drinkData as {
  cocktails: DrinkMap
  shots: DrinkMap
  lightBooze: DrinkMap
  straight: DrinkMap
  topShelf: DrinkMap
  nonAlcoholic: DrinkMap
}

const menuItems = (drinks: DrinkMap, include: (drink: Drink) => boolean, compressed = false) =>
  Object.entries(drinks)
    .filter(([, drink]) => include(drink))
    .map(([id, drink]) => (
      <MenuItem
        key={id}
        id={id}
        name={drink.name}
        link={drink.link}
        ingredients={drink.ingredients}
        compressed={compressed}
      />
    ))

// Alphabetical, but whiskey categories always come last.
const categoryOrder = (a: string, b: string) => {
  const aWhiskey = a.includes('Whiskey')
  const bWhiskey = b.includes('Whiskey')
  if (aWhiskey !== bWhiskey) return aWhiskey ? 1 : -1
  return a.localeCompare(b)
}

function Bar() {
  const straightCategories = [...new Set(Object.values(data.straight).map((drink) => drink.type ?? ''))].sort(
    categoryOrder,
  )

  return (
    <div className="menu-wrapper flex-center">
      <div className="menu flex-center">
        <h1 className="purple">Bar Menu</h1>
        <div className="divider" />
        <div className="section flex-center">
          <h2 className="purple">Featured Cocktails</h2>
          {menuItems(data.cocktails, (drink) => Boolean(drink.featured))}
        </div>
        <div className="section flex-center">
          <h2 className="purple">Cocktails</h2>
          {menuItems(data.cocktails, (drink) => !drink.featured)}
        </div>
        <div className="section flex-center compressed">
          <h2 className="purple compressed">Light Booze</h2>
          {menuItems(data.lightBooze, (drink) => !drink.ignore, true)}
        </div>
        <div className="section flex-center compressed">
          <h2 className="purple">Straight from the Bottle</h2>
          <div className="columns">
            {straightCategories.map((category) => (
              <div key={category} className="sub-section flex-center">
                <h3 className="purple">{category}</h3>
                {menuItems(data.straight, (drink) => !drink.ignore && drink.type === category, true)}
              </div>
            ))}
          </div>
        </div>
        <div className="section flex-center compressed">
          <h2 className="purple compressed">Top Shelf</h2>
          {menuItems(data.topShelf, (drink) => !drink.ignore, true)}
        </div>
        <div className="section flex-center compressed">
          <h2 className="purple compressed">Non Alcoholic</h2>
          {menuItems(data.nonAlcoholic, (drink) => !drink.ignore, true)}
        </div>
        <div className="note flex-end">
          <p>optional*</p>
          <p>available in decaf**</p>
        </div>
        <div className="note">
          <p>Please drink irresponsibly.</p>
        </div>
      </div>
    </div>
  )
}

export default Bar
