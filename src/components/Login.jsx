import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>LogIn</h1>
        <form>
            <input type="text" placeholder="UserName"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <button>LogIn</button>
        </form>
    </div>
  )
}

export default Login