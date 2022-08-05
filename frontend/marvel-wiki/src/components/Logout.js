import {GoogleLogout} from 'react-google-login'
import React from 'react'
import styled from 'styled-components'



let CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
console.log("env", process.env.REACT_APP_GOOGLE_CLIENT)
function LogoutGoogle() {

    const onSuccess = async () => {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log("Successfully Logged Out", user.email)
        await fetch('http://localhost:3001/google/logout/'+`${user.email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: user
        })
        localStorage.setItem('user', "")
        window.location.reload()
    }


    return (
        <div>
            <GoogleLogout 
                clientId={CLIENT_ID}
                buttonText="LOGOUT"
                cookiePolicy={'single_host_origin'}
                onLogoutSuccess={onSuccess}
                theme="dark"
            />
        </div>
    )
}

export default LogoutGoogle