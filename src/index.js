import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
//import Header from './components/Header';
//import Home from './pages/Home';
//import Curator from './components/Curator';
import Footer from './components/Footer';
import Slider from './components/Slider';
//import Places from './components/Places';
import Routes from './routes';
import { configure } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//jsx

/*const CONFIG = {
  state:'DF',
  city:'Brasília'
}*/

ReactDOM.render(
 <div className="main__wrapper">
   <div className="main__container">
     <BrowserRouter>
        <Routes />
       
     </BrowserRouter>     

   </div>
   <Footer/>
 </div>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
