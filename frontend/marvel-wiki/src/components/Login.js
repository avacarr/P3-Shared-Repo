import {GoogleLogin} from 'react-google-login'
import React from 'react'

let CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

function LoginGoogle() {

    const onSuccess = async (googleData) => {
        console.log("Successfully logged in", googleData.profileObj.givenName)
        await fetch('http://localhost:3001/google/login/'+`${googleData.profileObj.email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(googleData.profileObj)
        })
        .then((res) => res.json())
        .then((user) => {localStorage.setItem('user', JSON.stringify(user))})
        window.location.reload()
    }

    const onFailure = (res) => {
        console.log("Failed to log in", res)
    }

    return (
        <div>
            <GoogleLogin 
                clientId={CLIENT_ID}
                buttonText="LOGIN"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                theme="dark"
            />
        </div>
    )
}

export default LoginGoogle

