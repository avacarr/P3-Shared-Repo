import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.form`
  background-color: blue;
`



const Home = () => {
  return (
    <div>
    This is a Login Page
    This is where you will sign in to your profile and see your saved stuff\
    ONCE HE SHARES WE WILL SEE THIS ON THE SCREEN
    <LoginContainer>
    <form action='/home'>
      <div>
        <label htmlFor='name'>Username</label>
        <input type='text' name='name' id='name' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>

      <input type='submit' value='Log In' />

    </form>
    </LoginContainer>

    </div>
  )
}


  
    


export default Home