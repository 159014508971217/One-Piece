import React, {Component} from 'react';
import './index.less'
import { Button } from 'antd'
class User extends Component {
    render() {
        return (
            <div className="user">
                <Button>修改</Button>
                <div className="xinxi">
                    <span>姓名：</span>
                    <span>王毅</span>
                </div>
                <div className="xinxi">
                    <span>姓别：</span>
                    <span>男</span>
                </div>
                <div className="xinxi">
                    <span>年龄：</span>
                    <span>22</span>
                </div>
                <div className="xinxi">
                    <span>姓别：</span>
                    <span>男</span>
                </div>
                <div className="xinxi">
                    <span>年龄：</span>
                    <span>22</span>
                </div>
                <div className="qianming">
                    <span>个性签名：</span>
                    <span>啊发发发拆迁房擦QVIHJH去不去立刻采取包括宠你亲戚借钱去玩了</span>
                </div>
            </div>
        )
    }
}
export default User;
