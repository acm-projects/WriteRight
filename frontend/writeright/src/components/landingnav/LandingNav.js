import "./LandingNav.css";
import { useNavigate } from "react-router-dom";
import whitelogo from "../../images/whitelogo.png";

function LandingNav() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="nav">
      <img src={whitelogo} className="logo" alt="Logo" />
      <div className="nav-options">
        <div className="nav-option" onClick={handleHome}>
          Home
        </div>
        <div className="nav-option">About</div>
        <div className="nav-option">FAQ</div>
        <div className="nav-option">
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="nav-option">
          <button className="sign-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingNav;
