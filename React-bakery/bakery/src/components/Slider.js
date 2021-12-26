import React, { Component } from 'react';
import { render } from 'react-dom'; 
import '../home.css';

class Slider extends Component {
  render(){
       return (    
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
    
        <div className="carousel-inner mySlider "  >
          <div className="item active  myItem">
          <img src={window.location.origin + '/images/cakes-3257019.jpg'} />
            <div className="overlay"></div>
            <div className="heading">
                <h1>Welcome To Our <span> Bakery </span></h1>
                <p>where Everything is Baked Fresh,with Love .. just like home </p>
            </div>
          </div>
    
          <div className="item myItem">
                <img src={window.location.origin + '/images/vladimir-proskurovskiy-fE1b8smeOM0-unsplash.jpg'} />
            <div className="overlay"></div>
            <div className="heading">
                <p>Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet
                , consectetur adipiscing elit Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet
                , consectetur adipiscing elit, Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. </p>
            </div>
          </div>
        
          <div className="item myItem">
          <img src={window.location.origin + '/images/istockphoto-1207089837-612x612.jpg'} />
            <div className="overlay"></div>
            <div className="heading">     
                <p>Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          
        </div>
    
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      

      );
    }
  }
export default Slider;
