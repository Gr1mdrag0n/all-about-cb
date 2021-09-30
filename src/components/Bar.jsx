import React, { Component } from 'react';
import '../css/Bar.css';
import MenuItem from './MenuItem.jsx';

import drinkData from '../constants/cocktails.json';

class Bar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let featuredCocktails = [];

    Object.keys(drinkData.cocktails).forEach(cocktailKey => {
      let cocktail = drinkData.cocktails[cocktailKey];
      if (cocktail.featured) {
        featuredCocktails.push(<MenuItem key={cocktailKey} id={cocktailKey} name={cocktail.name} ingredients={cocktail.ingredients} />)
      }
    });

    let regularCocktails = [];

    Object.keys(drinkData.cocktails).forEach(cocktailKey => {
      let cocktail = drinkData.cocktails[cocktailKey];
      if (!cocktail.featured) {
        regularCocktails.push(<MenuItem key={cocktailKey} id={cocktailKey} name={cocktail.name} ingredients={cocktail.ingredients} />)
      }
    });

    let shots = [];

    Object.keys(drinkData.shots).forEach(shotKey => {
      let shot = drinkData.shots[shotKey];
      if (!shot.ignore) {
        shots.push(<MenuItem key={shotKey} id={shotKey} name={shot.name} ingredients={shot.ingredients} />)
      }
    });

    let lightBooze = [];

    Object.keys(drinkData.lightBooze).forEach(drinkKey => {
      let drink = drinkData.lightBooze[drinkKey];
      if (!drink.ignore) {
        lightBooze.push(<MenuItem key={drinkKey} id={drinkKey} name={drink.name} ingredients={drink.ingredients} compressed={true} />)
      }
    });

    let topShelf = [];

    Object.keys(drinkData.topShelf).forEach(drinkKey => {
      let drink = drinkData.topShelf[drinkKey];
      if (!drink.ignore) {
        topShelf.push(<MenuItem key={drinkKey} id={drinkKey} name={drink.name} ingredients={drink.ingredients} link={drink.link} compressed={true} />)
      }
    });

    let nonAlcoholic = [];

    Object.keys(drinkData.nonAlcoholic).forEach(drinkKey => {
      let drink = drinkData.nonAlcoholic[drinkKey];
      if (!drink.ignore) {
        nonAlcoholic.push(<MenuItem key={drinkKey} id={drinkKey} name={drink.name} ingredients={drink.ingredients} compressed={true} />)
      }
    });

    let straightBottle = [];

    let categories = [...new Set(Object.values(drinkData.straight).map(drink => drink.type))]
      .sort((a, b) => {
        if ((a.indexOf("Whiskey") !== -1 && b.indexOf("Whiskey") !== -1) || a.indexOf("Whiskey") === -1 && b.indexOf("Whiskey") === -1) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
        } else if (a.indexOf("Whiskey") !== -1) {
          return 1;
        } else {
          return -1;
        }
        return 0;
      });

    categories.forEach(category => {
      let output = [];
      let header = (
        <h3 className="purple">{category}</h3>
      );
      output.push(header);

      let list = [];

      Object.entries(drinkData.straight)
        // .sort((a, b) => b[1].name.length - a[1].name.length)
        .forEach(([drinkKey, drink]) => {
          if (!drink.ignore && drink.type === category) {
            list.push(<MenuItem key={drinkKey} id={drinkKey} name={drink.name} ingredients={drink.ingredients} type={drink.type} link={drink.link} compressed={true} />)
          }
        });

      output.push(list);


      straightBottle.push(
        <div className="sub-section flex-center">
          {output}
        </div>
      );
    });
    
    return (
      <div className='menu-wrapper flex-center'>
        <div className='menu flex-center'>
          <h1 className="purple">Bar Menu</h1>
          <div className="divider" />
          <div className="section flex-center">
            <h2 className="purple">Featured Cocktails🍹</h2>
            {featuredCocktails}
          </div>
          {/* <div className="section flex-center">
            <h2 className="purple">Shots</h2>
            {shots}
          </div> */}
          <div className="section flex-center">
            <h2 className="purple">Cocktails🍸</h2>
            {regularCocktails}
          </div>
          <div className="section flex-center compressed">
            <h2 className="purple compressed">Light Booze🍺</h2>
            {lightBooze}
          </div>
          <div className="section flex-center compressed">
            <h2 className="purple">Straight from the Bottle🍼</h2>
            <div className="columns">
              {straightBottle}
            </div>
          </div>
          <div className="section flex-center compressed">
            <h2 className="purple compressed">Top Shelf💸</h2>
            {topShelf}
          </div>
          <div className="section flex-center compressed">
            <h2 className="purple compressed">Non Alcholic☕</h2>
            {nonAlcoholic}
          </div>
          <div className="note flex-end">
            <p>*optional</p>
          </div>
          <div className="note">
            <p>Please drink irresponsibly.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
