import React, { Component } from 'react';
import '../css/Bar.css';
import MenuItem from './MenuItem.jsx';

import cocktailsData from '../constants/cocktails.json';
import shotsData from '../constants/shots.json';

class Bar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cocktails = [];

    Object.keys(cocktailsData).forEach(cocktailKey => {
      let cocktail = cocktailsData[cocktailKey];
      if (!cocktail.ignore) {
        cocktails.push(<MenuItem key={cocktailKey} id={cocktailKey} name={cocktail.name} ingredients={cocktail.ingredients} />)
      }
    })

    let shots = [];

    Object.keys(shotsData).forEach(shotKey => {
      let shot = shotsData[shotKey];
      if (!shot.ignore) {
        shots.push(<MenuItem key={shotKey} id={shotKey} name={shot.name} ingredients={shot.ingredients}/>)
      }
    })
    
    return (
      <div className='menu-wrapper flex-center'>
        <div className='menu flex-center'>
          <h1 className="gold">Bar Menu</h1>
          <div className="divider" />
          <div className="section flex-center">
            <h2 className="gold">Cocktails</h2>
            {cocktails}
          </div>
          <div className="section flex-center">
            <h2 className="gold">Shots</h2>
            {shots}
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
