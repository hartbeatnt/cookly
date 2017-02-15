import { SET_INGREDIENTS } from '../actions/types';

const ingredientsReducer = (state = {}, action) => {
  switch (action.type) {
    case (SET_INGREDIENTS):
      return Object.assign({}, state, {
        list: action.ingredients,
        hash: action.ingredients.reduce((accum, ingredient) => {
          accum[ingredient] = true;
          return accum;
        }, {})
      });
    default:
      return state;
  }
};

export default ingredientsReducer;
