import {GoogleLogout} from 'react-google-login'
import React from 'react'

let CLIENT_ID = '269560164013-j47b3davb459opfn0da9tb6rqkukv9rq.apps.googleusercontent.com'

function LogoutGoogle() {

    const onSuccess = (res) => {
        console.log("Logout completed successfully")
    }

    return (
        <div>
            <GoogleLogout 
                clientId={CLIENT_ID}
                buttonText="Logout"
                cookiePolicy={'single_host_origin'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutGoogle