import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Header from './Header';
import InputForm from './InputForm';
import Categorize from './Categorize';
import Footer from './Footer';
import PlayerDetails from './PlayerDetails';

function App() {

  return (
    <div className='App'>
        <Router>
          <Header /> 
          <Routes>
            
            <Route path='/' element = {<InputForm/>}> </Route>
            
            <Route path='/Categorize' element = {<Categorize/>}> </Route>

            <Route path='/PlayerDetails' element = {<PlayerDetails/>}> </Route>

          </Routes>
          <Footer />
        </Router>
    </div>
    );
  }


export default App;