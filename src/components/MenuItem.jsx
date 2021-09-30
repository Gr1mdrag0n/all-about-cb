import React, { Component } from 'react';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
import blackRussian from '../assets/drinks/blackRussian.svg'
import classicMartini from '../assets/drinks/classicMartini.svg'
import cucumberElderflowerGimlet from '../assets/drinks/cucumberElderflowerGimlet.svg'
import espressoMartini from '../assets/drinks/espressoMartini.svg'
import irishCoffee from '../assets/drinks/irishCoffee.svg'
import jagerbomb from '../assets/drinks/jagerbomb.svg'
import purpleRain from '../assets/drinks/purpleRain.svg'
import tequilaSunrise from '../assets/drinks/tequilaSunrise.svg'

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id, name, link, type, subtype, ingredients, compressed } = this.props;

    let images = {
      'blackRussian': blackRussian,
      'classicMartini': classicMartini,
      'cucumberElderflowerGimlet': cucumberElderflowerGimlet,
      'espressoMartini': espressoMartini,
      'irishCoffee': irishCoffee,
      'jagerbomb': jagerbomb,
      'purpleRain': purpleRain,
      'tequilaSunrise': tequilaSunrise
    }

    let drinkImage = images[id];
    if (!drinkImage) drinkImage = images['blackRussian'];

    let itemName = (<div className='item-name'>{name}</div>);
    if (link !== undefined) itemName = (<div className='item-name'><a href={link} target="_blank">{name}</a></div>);

    return (
      <div className={`menu-item` + (compressed ? ' compressed' : '')}>
        {
          compressed ? null : <div className={`item-img`}>
            <img src={drinkImage} className={id} alt="Drink Image" />
          </div>
        }
        {itemName}

        {
          ingredients ?
            <div className="item-content">
              <div className='item-ingredients'>
                {ingredients.map(ingredient => <div className='ingredient'>{ingredient}</div>)}
              </div>
            </div>
            :
            null
        }
      </div>
    );
  }
}

export default MenuItem;
