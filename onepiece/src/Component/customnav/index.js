import React, { Component, Fragment, PureComponent } from 'react';

// 引入anted  UI框架
import { Icon } from 'antd';
import 'antd/dist/antd.css';
// 引入router 
import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import './index.less';
class customnav extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { type1: "smile", text: "Dashboard", type2: "down" },
                { type1: "form", text: "表单页", type2: "down" },
                { type1: "user", text: "员工信息中心", type2: "down" }
            ],
            list2: [
                [{ text: "分析页", path: '/admin/user', }, { text: "监控页", path: '/login/2' }, { text: "工作台", path: '/login/3' }],
                [{ text: "基础表单", path: '/reg/1' }, { text: "分布表单", path: '/reg/2' }, { text: "高级表单", path: '/reg/3' }],
                [{ text: "个人信息", path: '/admin/information/user' }, { text: "公司员工信息", path: '/admin/information/others' }]
            ],
            show: { dom: 0, boolean: false },
        }
    }
    shows = (index, e) => {
        let show = {}
        let n = index.index
        show.dom = n
        if (n === this.state.show.dom) {
            show.boolean = !this.state.show.boolean
            if (show.boolean) {
                this.refs[n - 0].className = 'lit'
            } else {
                this.refs[n - 0].className = 'list'
            }
        } else {
            if (this.state.show.boolean) {
                show.boolean = this.state.show.boolean
                for (let i = 0; i < this.state.list.length; i++) {
                    this.refs[i - 0].className = 'list'
                }
                this.refs[n - 0].className = 'lit'
            } else {
                show.boolean = !this.state.show.boolean
                if (show.boolean) {
                    this.refs[n - 0].className = 'lit'
                } else {
                    this.refs[n - 0].className = 'list'
                }
            }
        }
        // console.log(show)
        // console.log(this.refs)
        this.setState({ show: show })
    }
    render() {
        return (
            <Fragment>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div onClick={this.shows.bind(this, { index })} ref={index} className='list'>
                                        <div>
                                            <Icon type={item.type1} />
                                            <span>{item.text}</span>
                                        </div>
                                        <Icon className="cente" type={item.type2} />
                                    </div>
                                    {
                                        this.state.show.dom === index && this.state.show.boolean ?
                                            <div className="list2">
                                                {
                                                    this.state.list2[index].map((item2, index2) => {
                                                        return (
                                                            <HashRouter>
                                                                <NavLink className="list21" to={item2.path} activeClassName='list2-1' key={index2} >{item2.text}</NavLink>
                                                            </HashRouter>
                                                        )
                                                    })
                                                }
                                            </div> : ''
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default customnav;
