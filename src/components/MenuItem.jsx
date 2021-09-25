import React, { Component } from 'react';
import blackRussian from '../assets/drinks/blackRussian.svg';
import cucumberElderflowerGimlet from '../assets/drinks/cucumberElderflowerGimlet.svg';
import espressoMartini from '../assets/drinks/espressoMartini.svg';
import purpleRain from '../assets/drinks/purpleRain.svg';

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id, name, ingredients } = this.props;

    let images = {
      'blackRussian': blackRussian,
      'cucumberElderflowerGimlet': cucumberElderflowerGimlet,
      'espressoMartini': espressoMartini,
      'purpleRain': purpleRain,
      'b52': blackRussian,
      'jagerbomb': blackRussian,
    }

    let drinkImage = images[id];

    console.log(drinkImage);
    
    return (
      <div className='menu-item'>
        <div className={`item-img`}>
          <img src={drinkImage} className={id} alt="Drink Image" />
        </div>
        <div className="item-content">
          <div className='item-name'>{name}</div>
          <div className='item-ingredients'>
            {ingredients.map(ingredient => <div className='ingredient'>{ingredient}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
