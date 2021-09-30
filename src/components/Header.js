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
                <Link to="/login">login</Link>
            </div>
        </div>
    )
}

export default Header
