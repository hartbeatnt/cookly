import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar row wrapper">
        <div className="logo-container col-md-6 row middle-xs">
          <span className="fa-stack fa-lg">
            <i className="fa fa-square fa-stack-2x"></i>
            <i className="fa fa-cutlery fa-stack-1x fa-inverse"></i>
          </span>
          <h1>Cookly</h1>
        </div>
        <div className="nav-container col-md-6 row middle-xs end-xs">
          <ul>
            <li>Home</li>
            <li>My Recipes</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
