import React from 'react';
import './App.css';
 import NavBar from './components/navBar/NavBar';
 
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/Row Post/RowPost';
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Home from './components/home/Home';
import Getstarted from './components/getStarted/Getstarted';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Getstarted/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
