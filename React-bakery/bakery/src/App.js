import React ,{Component} from 'react';
import Header from './components/Header';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

//import './App.css';
//import './home.css';
//import 'react-bootstrap';

class App extends Component {
  render(){ 
     return (
        <div className="home"> 
          <Header/>
          <About/>
          <Testimonial/>
          <Footer/>

       </div>
     );
  }
}

export default App;
