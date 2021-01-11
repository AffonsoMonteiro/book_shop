import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './pages/Home'
import Cart from './pages/Cart'


export default function Routes() {
    return (
        <Switch>
            <Route> 
                <Home path="/" exact />
            </Route>

            <Route path="/cart"> 
                <Cart />
            </Route>
        </Switch>
    )
}