import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className = "header">
            <div>
                <h1>Team Seeder</h1>
            </div>
            <div className = "headerLinks">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/About">About</Link>
                <Link to="/Tos">Terms of Service</Link>
                <Link to="/contact">Contact US</Link>
            </div>
        </div>
    )
}

export default Header
