import React from 'react'
import Auth from './models/Auth'

const LoginStatus = () =>{

    if(Auth.isUserAuthenticated()){
        return(
            <div>
                <p style={{color:"white"}}>You are currently logged in as: {Auth.getUserName()}</p>

            </div>
        )
    }
    else {
        return(
            <div>

                <p style={{color:"white"}}>You are not logged in!</p>
            </div>
        )
    }
}

export default LoginStatus