import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  NavLink
} from "react-router-dom";
import "./navbar.scss";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <ul id="navbar">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/cart">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/order">
            Order
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navbar;
