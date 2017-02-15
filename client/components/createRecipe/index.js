import React, { Component } from 'react';

import './CreateRecipe.scss';

class CreateRecipe extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit() {
    console.log('submission');
  }

  handleInputChange(e) {
    e.persist();
    this.setState((prevState) => {
      const newState = {};
      newState[e.target.name] = e.target.value
      return newState;
    });
  }

  render() {
    return (
      <div className="createRecipe row">
        <form onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}>
          <label htmlFor="recipe-name">Recipe Name:</label>
          <input type="text" name="recipe-name" onChange={this.handleInputChange} />

          <label htmlFor="ingredients">Ingredients:</label>
          <input type="text" name="ingredients" />

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

export default CreateRecipe;
