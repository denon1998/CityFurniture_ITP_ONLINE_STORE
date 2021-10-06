import React from 'react';
import './Categories.css';
import Subcategory from './Subcategory';

function Categories() { 
  return (
    <div className='category'>
      <h1>Check out your dream furniture!</h1>
      <h2>Here Are Our Furniture Categories!</h2>
      <div className=''>
        <div className='category__wrapper'>
          <ul className='category__items'> 
            <Subcategory
              src= {require('./images/homefurniture.jpg')}
              text='Household Furniture means all movable, compactable articles or apparatus, such as chairs, tables, sofas, tv stands, etc., for equipping a house
              Choosing the right one for your home not only improves overall beauty but keeps your stress away as well.'
              label='Home Furniture'
              path='/products'
            />
            <Subcategory
              src={require('./images/officefurniture.jpeg')}
              text='
              We have Office furniture essential for smooth and efficient functioning of an office. It makes office environment comfortable, pleasant and attractive.'
              label='Office Furniture'
              path='/officeFurniture'
            />
          </ul>
          <ul className='category__items'>
            <Subcategory
              src={require('./images/outdoorfurniture.jpg')}
              text='Good outdoor furniture combines this strength and weatherproofing with comfort and versatility.'
              label='Outdoor Furniture'
              path='/products'
            />
            <Subcategory
              src={require('./images/antiques.jpeg')}
              text='Here we have a collection of objects such as a piece of furniture or work of art that has an enhanced value because of its considerable age, but it varies depending on the item, its source, the year of its creation.'
              label='Antiques'
              path='/offers'
            />
            <Subcategory
              src={require('./images/accessories.jpg')}
              text='Home accessories are furniture items which are easy to replace and easy to move, and include almost any items that can functionally necessary in the decorated space.'
              label='Furniture Accessories'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;