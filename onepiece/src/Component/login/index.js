import React, { Component, Fragment } from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card ,message} from 'antd';
import './index.less'

class Login extends React.Component {
   
    submit=(e)=>{
        //登录 
        e.preventDefault()
       
       let reslt = this.props.form.getFieldsValue()
       console.log(reslt)
       this.props.form.validateFields((err,data)=>{
           if(err){
               message.error("输入信息有误")
           }else{
              this.$axios.get('/wy/admin/login',{params:{us:reslt.Us,ps:reslt.Ps}}
             
              )
              .then((data)=>{
                console.log(data)
                if(!data.data.err){
                   message.success("登陆成功",1,()=>{

                   this.props.history.push('/admin')
               })
                }else
                message.error("输入信息有误")


              })
             
           }
       })

    }
  
    render() {
       console.log(this,'登录')
       let {getFieldDecorator} = this.props.form
      return (
        <Card style={{width:'400px',position:'fixed',top:'200px',left:'50%',transform:'translateX(-50%)'}}>
        <div onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
           {getFieldDecorator('Us',{
                rules: [{ required: true, message: '请输入你的用户名' } ,
                { min:3,message:'用户名长度6到9位' },
                { max:20,message:'用户名长度6到9位' }],
                      
           })(
             <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,   
           )}
             
          
          </Form.Item>
          <Form.Item>
           {getFieldDecorator('Ps',{
                rules: [{ required: true, message: '请输入你的密码' }]
           })(  <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,)}   
        
          </Form.Item>
          <Form.Item>
          <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码？
            </a>
           
            Or <a href="">注册新账号
            <hr style={{border:'0'}}/>
            <Button onClick={this.submit}
            type="primary" className="login-form-button">
              登录
            </Button></a>
          </Form.Item>
        </div>
        </Card>
      ); 
    }
  }
  
 
export default Form.create()(Login)