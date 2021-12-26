import React, { Component } from 'react';
import { render } from 'react-dom'; 


class Footer extends Component {
  render(){
       return (    
        <section className="footer">
        <div className="containor">
            <div className="row">
                <div className="col-sm-3 footer-paragraph">
                    <h2><span>B</span>akery</h2>
                    <p>Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                        or sit amet,consectetur adipiscing elit,or sit amet,conse.
                    </p>
                </div>
    
                <div className="col-sm-3">
                    <h4>Features</h4>
                    <p>Home </p>
                    <p>products</p>
                    <p>Cart</p>
                    <p>Contact Us</p>
    
                </div>
    
                <div className="col-sm-3">
                    <h4>Quick Contact</h4>
                    <p> <i className="fas fa-phone"></i>  +1 012345678</p>
                    <p> <i className="far fa-envelope"></i> Hello@example.com</p>
                    <p> <i className="fas fa-car-side"></i> ABC Road, XYZ City</p>
                </div>
    
                <div className="col-sm-3">
                    <h4>Follow Us </h4>
                    <p> <i className="fab fa-facebook-square"></i> Facebook</p>
                    <p> <i className="fab fa-twitter-square"></i> Twitter</p>
                    <p> <i className="fab fa-instagram"></i> Instagram</p>
                </div>
    
            </div>
            <hr  style={{ color: '#9b9999', backgroundColor: '#9b9999', height: .005, borderColor : '#9b9999' }}/>
            <p className="copyright">Made By : </p>
        </div>
    
    </section>

      );
    }
  }
export default Footer;
