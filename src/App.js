import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import PrivateRoute from './utils/PrivateRoute';
import Tournament from './components/Input';
import Output from './components/Output';
import Profile from './components/Profile';
import TermsOfService from './components/TermsOfService';
import Bracket from './components/Bracket';
import Matchup from './components/Matchup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <div>
    <Router>
      <Header />
        <Switch>
          
          <Route path="/tournament">
            <Tournament />
          </Route>
          
          <Route exact path="/">
            <Home showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>

          <Route path="/login">
            <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
          </Route>
          
          <Route path="/about">
            <About />
          </Route>

          <Route path="/TermsOfService">
            <Bracket />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/output">
            <Output />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

        </Switch>
    </Router>
    
    </div>
  );
}

export default App;
