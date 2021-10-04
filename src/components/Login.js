import { useHistory } from "react-router"

const Login = () => {
    const history = useHistory();
    return (
        <div className = "loginWrapper">
            <h1>Log in</h1>
            <br />
            <form className = "loginForm">
                <input type="text" placeholder="username" />
                <br/>
                <input type="password" placeholder="password"/>
                <br />
                <br />
                <button type="submit" onClick={() => history.push('/')}>log in</button>
                <br />
                <p>or</p>
                <button type="submit" onClick={() => history.push('/')}>claim</button>
            </form>
        </div>
    )
}

export default Login