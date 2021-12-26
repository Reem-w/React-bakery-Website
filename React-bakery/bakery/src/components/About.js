import React, { Component } from 'react';
import { render } from 'react-dom'; 


class About extends Component {
  render(){
       return (    
    <section className="about">
      <div className="container">
        <div className="title"> US</div>
        <div className="row">
            <div className="col-sm-6 ">
                <div>
                <img src={window.location.origin + '/images/cake-1954054.jpg'} />
                </div>
            </div>

            <div className="col-sm-6">
               
               <div className="paragraph">
                   <h3 style={{color: '#9b9999'}}>Eleentum laoreet</h3>
                   <p>Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
               </div>
           </div>
        </div>

        <div className="row">
            <div className="col-sm-7">
                <div className="paragraph">
                    <h3 style={{color: '#9b9999'}}>Eleentum laoreet</h3>
                    <p>Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     Nam vel eleifend que fusce consequat pretuim veil Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className="col-sm-5">
                <div className="pic2">
                <img src={window.location.origin + '/images/xlcyq2h0pwcnb1brz22s.png'} />
                </div>
               
           </div>   
        </div>
    </div>
  </section>  

      );
    }
  }
export default About;
