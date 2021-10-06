import { useHistory } from "react-router";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <div className = "header">
            <div>
                <h1>Team Seeder</h1>
            </div>
            <div className = "headerLinks">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/About">About</Link>
                <Link to="/TermsOfService">Terms Of Service</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/Player">Player</Link>
               
            </div>
        </div>
    )
}

export default Header
