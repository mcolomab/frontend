import React, { useState } from 'react'
import { useHistory, Redirect } from "react-router-dom"
import isLoggedIn from '../../helpers/is_logged_in'
import store from 'store'
import './Login.css'

function Login() {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    function handleLogin(event) {
        event.preventDefault();
        setError(false);
        if (!(username === 'manuel' && password === 'manuel21')) {
            return setError(true);
        }
        store.set('loggedIn', true);
        history.push("/");
    }

    if (isLoggedIn()) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-page">
            <form className="form-login" onSubmit={handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input onChange={e => setUsername(e.target.value)} type="text" className="form-control" placeholder="Username" value={username} required />
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" value={password} required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </form>
        </div>
    )
}

export default Login
