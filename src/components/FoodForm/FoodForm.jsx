import React, { Component } from 'react';
import style from './FoodForm.css';

class FoodForm extends Component {

  render(){
    return (
      <div id={style['form-container']}>
        <input
          type="text"
          placeholder="dish name"
          value={this.props.foodForm}
          onChange={this.props.updateFoodForm}
        />
        <input
          type="text"
          placeholder="#foodporn photo URL"
          value={this.props.foodPicRL}
          onChange={this.props.updateFoodURL}
        />
        <button onClick={this.props.handleFoodSubmit}>
          Add!
        </button>
      </div>
    );
  }
}

export default FoodForm;
