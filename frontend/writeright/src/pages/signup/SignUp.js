//Import CSS sheet from same folder
import "../../everything.css";
import logo from '../../images/writerightTitle.png';
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
      <div className="center-boxSU">
        {/*Replace form background with the one from figma*/}
        {/*Replace title with actual Logo when imported */}
        <img src={logo} className="logoSU" alt="Logo" />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-groupSU">
              <input
                required
                type="text"
                className="form-fieldSU"
                name="fName"
                id="fName"
                value={fName}
                placeholder="  first name"
              />
            </div>

            <div className="form-groupSU">
              <input
                required
                type="text"
                className="form-fieldSU"
                name="lName"
                id="lName"
                value={lName}
                placeholder="  last name"
              />
            </div>

            <div className="form-groupSU">
              <input
                required
                type="email"
                className="form-fieldSU"
                name="email"
                id="email"
                value={email}
                placeholder="  email"
              />
            </div>

            <div className="form-groupSU">
              <input
                required
                type="text"
                className="form-fieldSU"
                name="username"
                id="username"
                value={username}
                placeholder="  username"
              />
            </div>

            <div className="form-groupSU">
              <input
                required
                type="password"
                className="form-fieldSU"
                name="password"
                id="password"
                value={password}
                placeholder="  password"
              />
            </div>

            <div className="form-groupSU">
              <button type="submit" className="submit-btnSU">
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="login-box">
        <p>
          Already have an account?{" "}
          <a className="login-text" href="#">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;