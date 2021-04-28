import React,{Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';

import './item-page.css';


class ItemPage extends Component {
  componentDidMount(){
    this.props.menuRequested();
    

    const {RestoService} = this.props;
    RestoService.getMenuItems()
    .then(res => this.props.menuLoaded(res))
    .catch(err => this.props.menuError())
  }
    
  getIcon = (category) => {
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

  
  render (){
    const {menuItems, loading} = this.props;
   
    const item = menuItems.find(item => +this.props.match.params.id.slice(1) === +item.id);

   //console.log(item);

   //console.log(item.title);

   //const {title, price, url, category, id} = item;

    if(loading){
      return <Spinner/>
    }

    return (
      <li className="item">
        <div className="close">X</div>
        <div className="title"><i className={`fas ${this.getIcon(item.category)}`}/>{item.title}</div>
        <img className="img" src={item.url} alt={item.title}></img>
        <div className="category">Category: <span>{item.category}</span></div>
        <div className="price">Price: <span>{item.price}$</span></div>
        <button className="btn">Add to cart</button>
      </li>
    )

  }
}

const mapStateToProps = (state) => {
  return {
      menuItems: state.menu,
      loading: state.loading,
      error: state.error
  }
}

export default WithRestoService()(connect(mapStateToProps,{menuLoaded, menuRequested, menuError})(ItemPage));
