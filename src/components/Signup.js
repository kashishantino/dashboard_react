import React from 'react'
import { Button, Checkbox, Form, Input, message} from 'antd';

const onFinish=(e)=>{
    console.log(e)
    setTimeout(()=>{
        message.success('Login success')
    },2000);
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Signup = () => {
  return (
    <div style={{marginLeft:"200px",marginTop:"200px"}}>
      <h1 style={{marginLeft:"320px",marginBottom:"20px"}}>Sign Up</h1>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

    </div>
  )
}

export default Signup

 