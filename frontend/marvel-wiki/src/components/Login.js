import {GoogleLogin} from 'react-google-login'
import React from 'react'

let CLIENT_ID = '269560164013-j47b3davb459opfn0da9tb6rqkukv9rq.apps.googleusercontent.com'


function LoginGoogle() {
    const onSuccess = async (googleData) => {
        console.log("Successfully logged in", googleData)
        const res = await fetch('http://localhost:3001/google/login', {
            method: 'POST',
            body: JSON.stringify({
                data: googleData
            })
        })
        .then((res) => {console.log("successfull", res.body)})

    }

    const onFailure = (res) => {
        console.log("Failed to log in", res)
    }

    return (
        <div>
            <GoogleLogin 
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginGoogle