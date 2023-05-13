import React, { useEffect, useState } from 'react'
import { api, local, helper } from '../../services';
import "../../assets/css/login.css"

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    if (!username || !password) return helper.toast('error', 'Please enter information!')
    let rs = await api.login({ username, password })
    if (rs.errorCode === 0) {
      local.set('session', rs.data?.token)
      props.history.push('/')
    }
  }

  useEffect(() => {
    if (local.get('session')) local.clear('session')
  }, [])

  return (
    <div className='wrapper'>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <div className='form-login'>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  )
}

export default Login