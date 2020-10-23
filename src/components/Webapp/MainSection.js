import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Products from '../Products'
import ProductAdd from '../Products/ProductAdd'
import Partners from '../Partners'
import PartnerAdd from '../Partners/PartnerAdd'
import Sidebar from './Sidebar'

function MainSection() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <Route exact path="/" component={Dashboard} />
                    <Switch>
                        <Route path="/products/new" component={ProductAdd} />
                        <Route path="/products" component={Products} />
                        <Route path="/partners/new" component={PartnerAdd} />
                        <Route path="/partners" component={Partners} />
                    </Switch>
                </main>
            </div>
        </div>
    )
}

export default MainSection
