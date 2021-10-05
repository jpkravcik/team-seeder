import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import RegistrationForm from './components/RegistrationForm';
import Tos from './components/Tos';
import Contact from './components/Contact';
import PrivateRoute from './utils/PrivateRoute';

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

          <Route path="/tos">
            <Tos />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/output">
            <Output />
          </Route>

        </Switch>
        <Footer />
    </Router>
    
    </div>
  );
}

export default App;
