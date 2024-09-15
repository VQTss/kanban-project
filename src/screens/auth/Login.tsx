
import { Button, Card, Checkbox, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const { Title, Paragraph } = Typography

const Login = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isRemembered, setIsRemembered] = useState(false)
  const handleLogin = (value: { email: string, password: string }) => {
    console.log('Received values of form: ', value)
  }
  return (
    <div>
      <Card>
        <div className='text-center'>
          <Title>Log in to your account</Title>
          <Paragraph>Please enter your email and password to sign in.</Paragraph>
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
          <Checkbox checked={isRemembered} onChange={(val) => setIsRemembered(val.target.checked)}>Remember</Checkbox>
        </div>
        <div className='col text-right'>
          <Link to={'/'}>Forgot password</Link>
        </div>
      </div>
      <div className='mt-4'>
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
      </Card>

    </div>
  )
}

export default Login