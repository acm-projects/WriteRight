//Import CSS sheet from same folder
import "../../everything.css";
import logo from "../../images/logo.png";
import { useState } from "react";
import axios from "axios";
import { useLoginStore } from "../../stores/LoginStore";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const login = useLoginStore((state) => state.login);
  const signIn = useLoginStore((state) => state.signIn);
  const globalUsername = useLoginStore((state) => state.globalUsername);
  const setGlobalUserName = useLoginStore((state) => state.setGlobalUserName);

  const navigate = useNavigate();
  const goSign = () => {
    navigate("/sign-up");
  };
  //Hook to store form data and submit it as a single object
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  let { username, password } = loginData;

  //When field in form is changed, variables are updated to take in whatever is in the field
  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Function to send data from input fields to database
  const handleSubmit = (e) => {
    //Prevents blank form from being submitted, which would be bad for the DB
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    const postUrl = "http://localhost:8080/users/login";

    axios
      .post(postUrl, loginData)
      .then(function (response) {
        signIn();
        setGlobalUserName(loginData.username);
        console.log(`The username is ${globalUsername}`);
        alert("User logged in successfully");
        navigate(`/projects`);
      })
      .catch(function (error) {
        console.log(error);
        alert(
          "Error logging in, please check console for a detailed error report"
        );
      });

    //After post request clear form data, set up redirect to new page after user signs up
  };

  return (
    <div className="outer">
      <div className="center-boxLI">
        <img src={logo} className="logoLI" alt="WriteRight" />
        <form onSubmit={handleSubmit}>
          <div className="form-groupLI">
            <input
              required
              type="text"
              className="form-fieldLI"
              name="username"
              id="username"
              onChange={onChange}
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
              onChange={onChange}
              defaultvalue={password}
              placeholder="  password"
            />
          </div>
          <div className="form-groupLI">
            <button type="submit" className="submit-btnLI">
              log in
            </button>
          </div>
        </form>
      </div>
      <div className="signup-box">
        <p>
          Don't have an account?{" "}
          <a className="signup-text" onClick={goSign}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
