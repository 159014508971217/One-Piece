import React, {Component, Fragment} from 'react'
import {HashRouter, Switch, Redirect, Route, NavLink} from 'react-router-dom'
import Componentimporent from './untils/componentimporent'
const Others = Componentimporent(() => import('./Component/information/others'))

<<<<<<< HEAD
import Login from './Component/login'
import Reg from './Component/reg'
import Admin from './Component/admin'
import Home from './Component/home'
import User from './Component/user'
=======
const Login = Componentimporent(() => import('./Component/login'))
const Admin = Componentimporent(() => import('./Component/admin'))
const Home = Componentimporent(() => import('./Component/home'))
const User = Componentimporent(() => import('./Component/information/user'))
>>>>>>> c8acfb2ab95f17ca4f022a88bd1148b80ecde5bf
class RootRouter extends Component {
    render () {
        return (
            <HashRouter>
                
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route  path='/login' component={Login}></Route>
                    <Route  path='/reg' component={Reg}></Route>
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