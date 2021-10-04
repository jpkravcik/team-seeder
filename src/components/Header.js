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
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/tos">Terms of Service</Link>
                <Link to="/contact">Contact US</Link>
            </div>
        </div>
    )
}

export default Header
