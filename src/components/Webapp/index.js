import React from 'react'
import { Redirect } from "react-router-dom"
import isLoggedIn from '../../helpers/is_logged_in'
import Header from './Header'
import MainSection from './MainSection'

function WebApp() {

    if (!isLoggedIn()) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header />
            <MainSection />
        </>
    )
}

export default WebApp
