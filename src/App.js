import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import { Product } from './components/Product';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import Router from './Router';

//import styles from '../src/styles/styles.css';
import styles from './App.css';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Router />

      <Footer />
    </BrowserRouter>



  );
}

export default App;
