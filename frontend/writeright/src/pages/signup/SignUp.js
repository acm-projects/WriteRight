//Import CSS sheet from same folder
import "./SignUp.css";
import logo from "../../images/logo.png";
import { useState } from "react";
import axios from "axios";

function SignUp() {
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
      [e.target.fName]: e.target.value,
      [e.target.lName]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.username]: e.target.value,
      [e.target.password]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const userData = {
      fName,
      lName,
      email,
      username,
      password,
    };

    //Replace with URL that will be used to send post request to the DB
    const postUrl = "";
    //Below here write out post request

    //After post request clear form data, set up redirect to new page after user signs up
  };

  return (
    <div className="outer">
      <div className="center-box">
        {/*Replace form background with the one from figma*/}
        {/*Replace title with actual Logo when imported */}
        <img src={logo} className="logo" alt="Logo" />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                required
                type="text"
                className="form-field"
                name="fName"
                id="fName"
                value={fName}
                placeholder="First Name"
              />
            </div>

            <div className="form-group">
              <input
                required
                type="text"
                className="form-field"
                name="lName"
                id="lName"
                value={lName}
                placeholder="Last Name"
              />
            </div>

            <div className="form-group">
              <input
                required
                type="email"
                className="form-field"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                required
                type="text"
                className="form-field"
                name="username"
                id="username"
                value={username}
                placeholder="Username"
              />
            </div>

            <div className="form-group">
              <input
                required
                type="password"
                className="form-field"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="login-box">
        <h2 className="caption">
          Already have an account?{" "}
          <a className="login-text" href="#">
            Log in
          </a>
        </h2>
      </div>
    </div>
  );
}

export default SignUp;
