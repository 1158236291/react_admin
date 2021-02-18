import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './pages/login/login.jsx';
import Admin from './pages/admin/admin.jsx';
export default class App extends Component {

    
    render() {
        return (
            <BrowserRouter>
            <Switch>
            <Route path='/' component={Login}></Route>
            <Route path='/admin' component={Admin}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}

