import React, { Component, Fragment } from 'react'
import './index.less'
import CustomNav from '../customnav'
class Admin extends Component {
    render() {
        return (
            <div className='admin'>
                <div className='admin-nav'>
                   这里是侧边栏
                </div>
                <div className='admin-conent'>
                    <div>头部信息</div>
                    <div>
                        {this.props.children}
                    </div>
                    <div>底部信息</div>
                </div>
            </div>
        )
    }
}
export default Admin