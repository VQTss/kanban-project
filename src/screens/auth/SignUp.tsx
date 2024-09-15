
import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
const { Title, Paragraph , Text} = Typography

function SignUp() {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = (value: { email: string, password: string }) => {
    console.log('Received values of form: ', value)
  }
  return (
    <>
      <Card style={{
        width: '50%',
      }}>
        <div className='text-center'>
          <Title level={2}>Create an account</Title>
          <Paragraph type='secondary'>Free trial 30-day</Paragraph>
        </div>
        <Form layout='vertical' form={form} onFinish={handleLogin} disabled={isLoading} size='large'>
        <Form.Item name={'name'} label='Name' rules={
          [
            {
              required: true,
              message: 'Please enter a valid name.',
            }
          ]
        }>
          <Input placeholder='Enter your name' allowClear maxLength={100} type='email' />
        </Form.Item>
        <Form.Item name={'email'} label='Email' rules={
          [
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email address.',
            }
          ]
        }>
          <Input placeholder='Enter your email' allowClear maxLength={100} type='email' />
        </Form.Item>
        <Form.Item name={'password'} label='Password' rules={
          [
            {
              required: true,
              message: 'Please enter a valid password address.',
            }
          ]
        }>
          <Input.Password placeholder='Create your password'  maxLength={100} type='password' />
        </Form.Item>
      </Form>
     
      <div className='mt-4 mb-3'>
          <Button onClick={() => form.submit()}
            type='primary'
            style={{
              width: '100%',
            }}
            size='large'
            >
            Login
          </Button>
      </div>
      <SocialLogin></SocialLogin>
      <div className='mt-4 text-center'>
            <Space>
              <Text type='secondary'>
                Already an account? <Link to={'/login'}>Login</Link>
              </Text>
            </Space>
      </div>
      </Card>

    </>
  )
}

export default SignUp