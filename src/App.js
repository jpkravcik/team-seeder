import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home'
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
      </Switch>
    </Router>
      {/* <Home /> */}
      {/* <Login style ={{ alignSelf: 'center'}}/> */}
    
    </div>
  );
}

export default App;
