import React, { Component } from 'react';
import style from './FoodListItem.css';

const FoodListItem = props => (
  <div className={style['food-list-item']}>
    <h4>{props.name}</h4>
    <div className={style['food-picture']}>
      <img src={props.url} alt={props.name}/>
    </div>
    <p>Likes: {props.likes}</p>
    <button onClick={() => props.likeFood(props.id)}>
      Drooling!
    </button>
    <button onClick={() => props.deleteFood(props.id)}>
      Delete
    </button>
  </div>
);

export default FoodListItem;
