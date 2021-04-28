import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category, id} = menuItem;
    
    const getIcon = (category) => {
      switch (category){
        case 'pizza': 
            return 'fa-pizza-slice';
        case 'salads':
            return 'fa-cheese';
        case 'meat':
            return 'fa-drumstick-bite';
        default:
            return category;
      }
    }
    
    return (
        <Link to={`/:${id}`}>
            <li className="menu__item">
                <div className="menu__title"><i className={`fas ${getIcon(category)}`}/> {title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        </Link>
    )
}

export default MenuListItem;