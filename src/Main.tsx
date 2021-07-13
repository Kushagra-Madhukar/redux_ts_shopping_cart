import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Pages/Profile'
import Layout from './components/Layout'
import Products from './Pages/Products'
import Seller from './Pages/Seller'
import CreateProduct from './Pages/CreateProduct'

const Main = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Products/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/seller">
                        <Seller/>
                    </Route>
                    <Route path="/createProduct">
                        <CreateProduct/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default Main
