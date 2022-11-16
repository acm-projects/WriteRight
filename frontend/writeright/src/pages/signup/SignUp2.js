import React from "react";
import logo from "../../images/logo.png";
import { useState } from "react";
import axios from "axios";
import "./SignUp2.css";
import rainbow from "../../images/rainbowWhiteBG.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp2() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  //Hook to store form data and submit it as a single object
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: "",
  });

  let { fName, lName, email, username, password } = formData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const postUrl = "http://localhost:8080/users/register";

    const userData = {
      fName,
      lName,
      email,
      username,
      password,
    };

    //After post request clear form data, set up redirect to new page after user signs up
    axios
      .post(postUrl, userData)
      .then(function (response) {
        console.log(response);
        alert("User has successfully registered!");
        handleLogin();
      })
      .catch(function (error) {
        console.log(error);
        alert("Error, please check console and try again later");
      });

    /* setFormData({
        fName: "",
        lName: "",
        email: "",
        username: "",
        password: "",
      });*/
  };

  return (
    <div className="su2-outer">
      <div className="su2-white">
        <div className="su-form-half">
          <div className="su-logo">
            <img src={logo} className="su2-logo" alt="Logo" />
            <div className="su2-form">
              <div className="su2-header">
                <h1 className="su-2main-text">Get Started</h1>
                <h2 className="su-sub-text">
                  Already have an account?{" "}
                  <Link to="/login" className="su-sign-hyperlink">
                    Sign in
                  </Link>
                </h2>
              </div>

              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="su2-form-group">
                    <h3>First Name</h3>
                    <input
                      required
                      type="text"
                      className="su2-form-field"
                      name="fName"
                      id="fName"
                      value={fName}
                      onChange={onChange}
                    />
                  </div>

                  <div className="su2-form-group">
                    <h3>Last Name</h3>
                    <input
                      required
                      type="text"
                      className="su2-form-field"
                      name="lName"
                      id="lName"
                      value={lName}
                      onChange={onChange}
                    />
                  </div>

                  <div className="su2-form-group">
                    <h3>Email</h3>
                    <input
                      required
                      type="email"
                      className="su2-form-field"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>

                  <div className="su2-form-group">
                    <h3>Username</h3>
                    <input
                      required
                      type="text"
                      className="su2-form-field"
                      name="username"
                      id="username"
                      value={username}
                      onChange={onChange}
                    />
                  </div>

                  <div className="su2-form-group">
                    <h3>Password</h3>
                    <input
                      required
                      type="password"
                      className="su2-form-field"
                      name="password"
                      id="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>

                  <div className="su2-form-group-btn">
                    <button type="submit" className="submit-btnSU2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="su-color-half"></div>
      </div>
    </div>
  );
}

export default SignUp2;
