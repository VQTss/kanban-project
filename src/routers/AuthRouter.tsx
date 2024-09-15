
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens/index'

function AuthRouter() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <h1>faaaaa</h1>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

    </div>

  )
}

export default AuthRouter