import React, { Component, Fragment } from 'react'
import './index.less'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import CustomNav from '../customnav'
class Admin extends Component {
    render() {
        return (
            <div className='admin'>
                <div className='admin-nav'>
                   <CustomNav></CustomNav>
                </div>
                <div className='admin-conent'>
                    <div className="header">
                        <div className="herder-left">
                            <span className="touxiang">
                                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1029438222,3343725378&fm=26&gp=0.jpg" />
                            </span>
                            <Icon className="gender" type="man" />
                            <div>
                                <Icon type="search" />
                                <input></input>
                            </div>
                        </div>
                        <div className="header-right">
                            <Icon type="user" /><span>个人中心</span>
                        </div>
                    </div>
                    <div className="admin-conent-conent">
                        {this.props.children}
                    </div>
                    <div className="footer">底部信息</div>
                </div>
            </div>
        )
    }
}
export default Admin