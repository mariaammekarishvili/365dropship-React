import GoogleLogin from 'react-google-login'
import React,{Component} from "react";

export class  GoogleAuthorization extends Component {

    responseGoogle=(response)=>{
        localStorage.setItem('user', JSON.stringify(response.profileObj) )
        localStorage.setItem('token',(response.tokenObj.access_token) )
        console.log(response.tokenObj.access_token)
        console.log(response.profileObj)

    }
    render() {
      return(
        <div>
            <GoogleLogin
                clientId={'612021615226-0p5kckuqvj8eju72qhinm9sf7unb6bn1.apps.googleusercontent.com'}
                buttonText={'Sign in with Google'}
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
         )
    }
}