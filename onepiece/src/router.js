import React, {Component, Fragment} from 'react'
import {HashRouter, Switch, Redirect, Route, NavLink} from 'react-router-dom'
import CustomNav from './Component/customnav'
import Login from './Component/login'
import Admin from './Component/admin'
import Home from './Component/home'
import User from './Component/user'
class RootRouter extends Component {
    render () {
        return (
            <HashRouter>
                <CustomNav></CustomNav>
                <Switch>
                    <Redirect exact from='/' to='/admin'></Redirect>
                    <Route  path='/login' component={Login}></Route>
                    <Route  path='/admin' render={() => {
                        return (
                            <Admin>
                                <Route  path='/admin/home' component={Home}></Route>
                                <Route  path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter