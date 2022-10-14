//Import CSS sheet from same folder
import "../../everything.css";
import logo from '../../images/writerightTitle.png';
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  //Hook to store form data and submit it as a single object
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    buttonDisabled: false
  });

  let { username, password, buttonDisabled } = loginData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const onChange = (e) => {
    setLoginData((prevState) => ({
      [e.target.username]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.buttonDisabled]: e.target.value
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const userData = {
      username,
      password,
      buttonDisabled
    };

    //Replace with URL that will be used to send post request to the DB
    const postUrl = "";
    //Below here write out post request

    //After post request clear form data, set up redirect to new page after user signs up
  };

  return (
    <div className="outer">
      <div className="center-boxLI">
      <img src={logo}
        className="logoLI"
        alt="WriteRight"
        />
        <div className="form-groupLI">
        <input
                required
                type="text"
                className="form-fieldLI"
                name="username"
                id="username"
                defaultvalue={username}
                placeholder="  username"
        />
        </div>
        <div className="form-groupLI">
        <input
                required
                type="password"
                className="form-fieldLI"
                name="password"
                id="password"
                defaultvalue={password}
                placeholder="  password"
        />
        </div>
        <div className="form-groupLI">
              <button type="submit" className="submit-btnLI">
                log in
              </button>
            </div>


        </div>
        <div className="signup-box">
        <p>
          Don't have an account?{" "}
          <a className="signup-text" href="../signup">
            Sign up
          </a>
        </p>
      </div>
      </div>
    );
  }

export default LoginForm;