
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Login , SignUp} from '../screens/index'

function AuthRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AuthRouter