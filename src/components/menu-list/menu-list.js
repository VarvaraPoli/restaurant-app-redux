import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount(){
        this.props.menuRequested();
        

        const {RestoService} = this.props;
        RestoService.getMenuItems()
        .then(res => this.props.menuLoaded(res))
        .catch(err => this.props.menuError())
    }

    render() {
        const {menuItems, loading} = this.props;
        if(loading){
            return <Spinner/>
        }
        const items = menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    });

        return <Item items = {items}/>
    }
};

const mapStateToProps = (state) => {
  return {
      menuItems: state.menu,
      loading: state.loading,
      error: state.error
  }
}

const Item = ({items}) => {
    return (
        <ul className="menu__list">{items}</ul>
    )
}

export default WithRestoService()(connect(mapStateToProps, {menuLoaded, menuRequested, menuError})(MenuList));