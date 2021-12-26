import React, { Component } from 'react';
import { render } from 'react-dom'; 


class Testimonial extends Component {
  render(){
       return (    
        <div className="test">
        <div className="container">
        <hr  style={{ color: 'rgb(227 222 222)', backgroundColor: 'rgb(227 222 222)', height: .005, borderColor : 'rgb(227 222 222)' }}/>
            <div className="title"> Reviews</div>
         </div> 
        </div>  

      );
    }
  }
export default Testimonial;
