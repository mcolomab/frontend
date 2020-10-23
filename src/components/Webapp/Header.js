import React from 'react'
import { useHistory } from "react-router-dom"
import store from 'store'
import './Header.css'

function Header() {
    let history = useHistory();

    function handleLogout() {
        store.remove('loggedIn');
        history.push("/login");
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/#">CB Clenaer</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap" onClick={handleLogout}>
                    <span role="button" className="nav-link">Sign out</span>
                </li>
            </ul>
        </nav>
    )
}

export default Header
