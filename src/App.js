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
  return (
    <div>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
              <RegistrationForm />
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
        </Switch>
        <Footer />
    </Router>
    
    </div>
  );
}

export default App;
