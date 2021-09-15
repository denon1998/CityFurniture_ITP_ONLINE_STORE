import React from 'react';
import { Link } from 'react-router-dom';

function Subcategory(props) {
  return (
    <div>
      <li className='sub-category'>
        <Link className='sub-category__link' to={props.path}>
          <figure className='sub-category__pic-wrap' data-category={props.label}>
            <img
              src={props.src}
              className='sub-category__img'
              alt='Bed_Room_Furniture Image'
              
            />
          </figure>
          <div className='sub-category__info'>
            <h5 className='sub-category__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Subcategory;