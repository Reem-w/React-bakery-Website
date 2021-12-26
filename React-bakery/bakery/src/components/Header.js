import React, { Component } from 'react';
import { render } from 'react-dom'; 
import Slider from './Slider';

class Header extends Component {
  render(){
       return (  
    <header>
        <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><span>B</span>AKERY</a>
          </div>
          <ul className="nav navbar-nav ">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Cntact Us</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right ">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>

        <Slider/>
        </header>  

      );
    }
  }
export default Header;
