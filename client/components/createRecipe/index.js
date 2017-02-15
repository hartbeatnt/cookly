import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import FormInput from '../forms/input';

import './CreateRecipe.scss';

class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateIngredientList = debounce(this.updateIngredientList, 500);
  }

  updateIngredientList(val) {
    const { list } = this.props.ingredients;
    const updatedList = list.filter(item => (new RegExp(val)).test(item));

    this.setState({
      ingredientSearch: updatedList
    });
  }

  renderIngredientSearch() {
    if (this.state.ingredientSearch && this.state.ingredientSearch.length <= 20) {
      return this.state.ingredientSearch.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
    }
  }

  handleSubmit() {
    console.log('submission');
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const newState = {};
      newState[name] = value;
      return newState;
    }, () => {
      if (name === "ingredients") {
        this.updateIngredientList(this.state[name]);
      }
    });
  }

  render() {
    return (
      <div className="createRecipe row">
        <form onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}>
          <FormInput type="text" name="recipe-name" label="Recipe Name" onChange={this.handleInputChange} />

          <label htmlFor="ingredients">Ingredients:</label>
          <input type="text" name="ingredients" onChange={this.handleInputChange} />

          <ul>
            {this.renderIngredientSearch()}
          </ul>

          <label htmlFor="notes">Notes:</label>
          <input type="text" name="notes" onChange={this.handleInputChange} />

          <label htmlFor="arrangements">Arrangements:</label>
          <input type="text" name="arrangements" />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  };
};

const CreateRecipeContainer = connect(mapStateToProps)(CreateRecipe);

export default CreateRecipeContainer;
