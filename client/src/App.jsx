import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Car from './components/pages/Car'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/' exact component={Home} />
      <Route path='/cars' exact component={Car} />
      <Footer/>
    </Router>
  );
}

export default App;
