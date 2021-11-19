import { useHistory } from "react-router";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <div className = "flex items-center text-white bg-blue-600 h-28 text-xl">
            <div>
                <Link to="/"> <h1 className="ml-2 font-bold text-3xl">Team Seeder</h1> </Link>
            </div>
            <div className = "flex align-center text-center m-5 ml-3">
                <Link className= "header-link" to="/Login">Login</Link>
                <Link className= "header-link" to="/About">About</Link>
                <Link className= "header-link" to="/TermsOfService">Terms Of Service</Link>
                <Link className= "header-link" to="/contact">Contact us</Link>
                <Link className= "header-link" to="/Player">Player</Link>
               
            </div>
        </div>
    )
}

export default Header
