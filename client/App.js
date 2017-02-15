import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.scss';

class App extends Component {
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
}

export default App;
