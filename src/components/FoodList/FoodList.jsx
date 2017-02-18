import React, { Component } from 'react';
import FoodListItem from '../FoodListItem/FoodListItem.jsx';
import style from './FoodList.css';

class FoodList extends Component {

  componentWillMount() {
    this.props.getAllFood();
  }

  renderFood() {
    return this.props.food.map((food, i) =>
      <FoodListItem
        key={i}
        name={food.name}
        url={food.url}
        likes={food.likes}
        id={food.id}
        deleteFood={this.props.deleteFood}
        likeFood={this.props.likeFood}
      />
    );
  }

  render(){
    console.log(style)
    return (
      <div id={style['food-list-container']}>
        {this.renderFood()}
      </div>
    );
  }
}

export default FoodList;
