import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Navbar from './components/navbar';
import setIngredients from './actions/setIngredients';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/ingredients')
      .then(resp => {
        const { ingredients } = resp.data;
        this.props.dispatch(setIngredients(ingredients));
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="app-body wrapper row">
          <div className="view col-md-8">
            {this.props.children}
          </div>
          <div className="sidebar col-md-4">
            <h3>Sidebar</h3>
          </div>
        </div>
      </div>
    );
  }
};

const AppWrapper = connect()(App);

export default AppWrapper;
