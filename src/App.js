import React from 'react';
import Navbar from './components/Nav/Navbar';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Registration from './components/Registration/Registration';
import Couches from './components/Couches/Couches';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/'
        render={props=> <Home {...props}/>}
        />
      <Route path='/About'
        render={props=> <About {...props}/>}
        />
       <Route path='/Registration'
        render={props=> <Registration {...props}/>}
        />
        <Route path='/Couches'
        render={props=> <Couches {...props}/>}
        />
        <Route path='/Contact'
        render={props=> <Contact {...props}/>}
        />
      </Switch>
      
    </div>
  );
}

export default App;
