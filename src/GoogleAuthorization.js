import GoogleLogin from 'react-google-login'
import React,{Component} from "react";
import { withRouter } from 'react-router-dom'


class GoogleAuthorization extends Component {

    responseGoogle=(response)=>{
        localStorage.setItem('user', JSON.stringify(response.profileObj) )
        localStorage.setItem('token',(response.tokenObj.access_token))
        this.props.history.push('/catalog')
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
export default withRouter(GoogleAuthorization)