import React, { Component } from 'react';
import FoodForm from './FoodForm/FoodForm.jsx';
import FoodList from './FoodList/FoodList.jsx';
import FoodListItem from './FoodListItem/FoodListItem.jsx';
import './normalize.css';
import style from './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      food: [],
      foodForm: '',
      foodPicURL: ''
    };
  }

  getAllFood() {
    fetch(`/api/food/`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        food: data
      });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }

  deleteFood(id) {
    fetch(`/api/food/${id}`, {
      method: 'delete'
    })
    .then(() => {
      let food = this.state.food.filter((puppy) => {
        return food.id !== id;
      });
      this.setState({ food });
    })
    .catch(err => console.log(err));
  }

  likeFood(id) {
    fetch(`/api/food/like/${id}`, {
      method: 'put'
    })
    .then(() => {
      let food = this.state.food.map((food) => {
        if(food.id === id) food.likes += 1;
        return food;
      })
      this.setState({ food });
    })
    .catch(err => console.log(err));
  }

  updateFoodForm(e) {
    this.setState({
      foodForm: e.target.value,
    });
  }

  updateFoodURL(e) {
    this.setState({
      foodPicURL: e.target.value,
    });
  }

  handleFoodSubmit() {
    fetch('/api/food', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
      name: this.state.foodForm,
      url: this.state.foodPicURL
      })
    })
    .then(this.setState({
      foodForm: '',
      foodPicURL: ''
    }))
    .then(this.getAllFood())
    .catch(err => console.log(err));
    }

    render(){
    return (
      <div id="app-container">
        <header>
          <h1>MMMFOOD</h1>
        </header>
        <FoodForm
          foodForm={this.state.foodForm}
          foodPicURL={this.state.foodPicURL}
          updateFoodForm={event => this.updateFoodForm(event)}
          updateFoodURL={event => this.updateFoodURL(event)}
          handleFoodSubmit={() => this.handleFoodSubmit()}
        />
        <h3>ALL OF THE FOOD</h3>
        <FoodList
          food={this.state.food}
          getAllFood={this.getAllFood.bind(this)}
          deleteFood={this.deleteFood.bind(this)}
          likeFood={this.likeFood.bind(this)}
        />
      </div>
    );
  }
}

export default App;
