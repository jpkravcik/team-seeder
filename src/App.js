import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Tos from './components/Tos';
import Contact from './components/Contact';
import Output from './components/Output';
import Tournament from './components/Input';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Header />
        <Switch>
          
          <Route exact path="/tournament" component={Input}/>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
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
