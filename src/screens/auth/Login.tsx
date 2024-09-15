
import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
const { Title, Paragraph , Text} = Typography

const Login = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isRemembered, setIsRemembered] = useState(false)
  const handleLogin = (value: { email: string, password: string }) => {
    console.log('Received values of form: ', value)
  }
  return (
    <>
      <Card style={{
        width: '50%',
      }}>
        <div className='text-center'>
          <Title level={2}>Log in to your account</Title>
          <Paragraph type='secondary'>Welcome back! please enter your details</Paragraph>
        </div>
        <Form layout='vertical' form={form} onFinish={handleLogin} disabled={isLoading} size='large'>
        <Form.Item name={'email'} label='Email' rules={
          [
            {
              required: true,
              type: 'email',
              message: 'Please enter a valid email address.',
            }
          ]
        }>
          <Input allowClear maxLength={100} type='email' />
        </Form.Item>
        <Form.Item name={'password'} label='Password' rules={
          [
            {
              required: true,
              message: 'Please enter a valid password address.',
            }
          ]
        }>
          <Input.Password  maxLength={100} type='password' />
        </Form.Item>
      </Form>
      <div className='row'>
        <div className='col'>
          <Checkbox checked={isRemembered} onChange={(val) => setIsRemembered(val.target.checked)}>Remember for 30 days</Checkbox>
        </div>
        <div className='col text-right'>
          <Link to={'/'}>Forgot password</Link>
        </div>
      </div>
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
              <Text>
                Don't have an account? <Link to={'/sign-up'}>Sign up</Link>
              </Text>
            </Space>
      </div>
      </Card>

    </>
  )
}

export default Login