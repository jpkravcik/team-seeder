const Login = () => {
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
                <button type="submit">login</button>
                <br />
                <p>or</p>
                <button type="submit">claim</button>
            </form>
        </div>
    )
}

export default Login