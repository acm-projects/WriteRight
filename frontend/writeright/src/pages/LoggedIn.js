import React from "react";
import { observer } from "mobx-react";
import UserStore from "../stores/UserStores";
import LoginForm from "./login/LoginForm";
import SubmitButton from "./login/SubmitButton";
import "../everything.css";
import loadingLogo from "../images/logoLoading.png";
//App.js

class LoggedIn extends React.Component {
  /* 
  //API call for logging in
  async componentDidMount(){
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  //API call for logging out
  async doLogout(){
    try{
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }
    catch(e){
      console.log(e)
    }
  }
  */

  render() {
    if (UserStore.loading) {
      return (
        <div className="outer">
          <img src={loadingLogo} className="logoL" alt="WriteRight" />
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div>
            Welcome, {UserStore.username}
            <SubmitButton
              text={"Log out"}
              disabled={false}
              onClick={() => this.doLogout()}
            />
          </div>
        );
      }
      //what happens if you're not logged in
      return <LoginForm />;
    }
  }
}

export default LoggedIn;
