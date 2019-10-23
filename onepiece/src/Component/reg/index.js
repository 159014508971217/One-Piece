import React, { Component, Fragment , AutoCompleteOption , Option ,residences} from 'react'
import {Form,Input,Tooltip,Icon,Upload,Select,Row,Col,Checkbox,Button,AutoComplete,Card ,DatePicker ,Radio ,message} from 'antd';
import './index.less'
const InputGroup = Input.Group;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
  
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}



class reg extends React.Component {
  state = {
    value: 0,
    loading: false,
    confirmDirty: false,

  };
  submit=(e)=>{
    //登录 
    e.preventDefault()
   console.log(this.props.form)
   this.props.form.validateFields((err,data)=>{
     console.log(data)
     console.log(this.state.imageUrl)
   })
}
handleConfirmBlur = e => {
  const { value } = e.target;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

compareToFirstPassword = (rule, value, callback) => {
  const { form } = this.props;
  if (value && value !== form.getFieldValue('ps')) {
    callback('Two passwords that you enter is inconsistent!');
  } else {
    callback();
  }
};
validateToNextPassword = (rule, value, callback) => {
  const { form } = this.props;
  if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
  }
  callback();
};

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };




  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  
    render() {
      const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 30,
            offset: 0,
          },
          sm: {
            span: 30,
            offset: 8,
          },
        },
      };
      const { imageUrl } = this.state;

      return(
      <Card style={{width:'400px',position:'fixed',top:'100px',left:'50%',transform:'translateX(-50%)'}}>
       <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label={  <span>
              用户名&nbsp;
              <Tooltip title="输入你的用户名">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
            {getFieldDecorator('us', {
            rules: [
              {
               
                message: '请输入你要设置的用户名!',
              },
              
            ],
          })
          (<Input/>)}
          
        </Form.Item>
        <Form.Item label="密   码" hasFeedback>
        {getFieldDecorator('ps', {
            rules: [
              {
               
                message: '请输入你要设置的密码!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })
          (<Input.Password />)}
        
        </Form.Item>
        <Form.Item label="重复密码" hasFeedback>
        {getFieldDecorator('confirm', {
            rules: [
              {
               
                message: '请输入你要设置的密码!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })
          (<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="姓  名" hasFeedback>
        {getFieldDecorator('name', {
            
          })
          (<Input/>)}
        
        </Form.Item>
        
        <Form.Item label="性别">
        <Radio.Group onChange={this.onChange} value={this.state.value} defaultValue={1}>
        {getFieldDecorator('sexy')
        (<div>
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio></div>)}
        
      </Radio.Group>
        </Form.Item>
        <Form.Item label="头像">
       
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
         
        
      </Form.Item>
       
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={this.submit}>
           注册
          </Button>
        </Form.Item>
      </Form>
    


      </Card>)}}
       
   
 
export default Form.create()(reg)