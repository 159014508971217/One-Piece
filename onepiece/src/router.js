import React, {Component, Fragment} from 'react'
import {HashRouter, Switch, Redirect, Route, NavLink} from 'react-router-dom'
import Componentimporent from './untils/componentimporent'
const Others = Componentimporent(() => import('./Component/information/others'))

const Login = Componentimporent(() => import('./Component/login'))
const Admin = Componentimporent(() => import('./Component/admin'))
const Home = Componentimporent(() => import('./Component/home'))
const User = Componentimporent(() => import('./Component/information/user'))
class RootRouter extends Component {
    render () {
        return (
            <HashRouter>
                
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route  path='/login' component={Login}></Route>
                    <Route  path='/admin' render={() => {
                        return (
                            <Admin>
                                <Route  path='/admin/home' component={Home}></Route>
                                {/* <Route  path='/admin/information/user' component={User}></Route> */}
                                <Route  path='/admin/information/others' component={Others}></Route>
                                <Route  path='/admin/information/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter