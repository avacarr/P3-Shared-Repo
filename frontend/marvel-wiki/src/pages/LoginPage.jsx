import React from 'react'


const Home = () => {
  return (
    <>
    This is a Login Page
    This is where you will sign in to your profile and see your saved stuff
    <form>
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
    
    </>
  )
}

export default Home