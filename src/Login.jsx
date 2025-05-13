import React from 'react'

export default function Login() {
  return (
   <>
   <h1>Login account</h1>
   <label htmlFor="eamil">Your email</label><br/>
   <input type="email" placeholder='thanhkiet2525@gmail.com' /><br/><br/>
   <label htmlFor="password">Password</label><br/>
   <input type="password"/><br/><br/>
   <button style={{backgroundColor: "blue", color: "white"}}>Login an account</button>
   </>
  )
}
