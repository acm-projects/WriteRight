import React from 'react';
import "../../everything.css";
import logo from '../../images/writerightTitle.png';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
//import UserStore from './stores/UserStore';
//LoginForm.js

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if(val.length > 15){ //max length of 15
            return;
        }
        this.setState({
            [property]: val
        })
    }

        //if the username and or password is wrong, the form will be reset
    resetForm(){
        this.setState({
            username:'',
            password: '',
            buttonDisabled: false
        })
    }

    /* 
    //yet another API call yasss
    async doLogin(){
        if(!this.state.username){
            return;
        }
        if(!this.state.password){
            return;
        }
        this.setState({
            buttonDisabled:true
        })
        try{
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ //will send the username and password to API + check in the database if they exist
                    username: this.state.username,
                    password: this.state.password
                })
            });
            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            } else if (result && result.success === false){
                this.resetForm();
                alert(result.msg); //return an error from the API later
            }

        }
        catch(e) { //if there is trouble connecting to the API, error message + the form is reset
            console.log(e);
            this.resetForm();
        }
    }
    */

  render(){
    return (
      <div className="outer">
      <div className="center-boxLI">
      <img src={logo}
        className="logoLI"
        alt="WriteRight"
        />
        <div className="form-groupLI">
        <InputField
            type='text'
            placeholder='  username'
            value={this.state.username ? this.state.username : ''}
            onChange = {(val) => this.setInputValue('username',val)}
        />
        </div>
        <div className="form-groupLI">
        <InputField
            type='password' 
            placeholder='  password'
            value={this.state.password ? this.state.password : ''}
            onChange = {(val) => this.setInputValue('password',val)}
        />
        </div>
        <SubmitButton
            text='log in'
            disabled={this.state.buttonDisabled}
            onClick={() => this.doLogin()}
        />
        </div>
        <div className="signup-box">
        <p>
          Don't have an account?{" "}
          <a className="signup-text" href="#">
            Sign up
          </a>
        </p>
      </div>
      </div>
    );
  }
}

export default LoginForm;