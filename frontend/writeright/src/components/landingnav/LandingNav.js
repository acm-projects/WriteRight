import "./LandingNav.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

function LandingNav() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="nav-options">
        <div className="nav-opt-section">
          <img src={logo} className="land-logo" alt="Logo" />
          <div className="landing-left-nav">
            <div className="nav-option" onClick={handleHome}>
              Home
            </div>
            <div className="nav-option">About</div>
            <div className="nav-option">FAQ</div>
          </div>
        </div>
        <div className="land-nav-btns">
          <div className="nav-option">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="nav-option">
            <button className="sign-btn" onClick={handleSignUp}>
              <span id="landnav-sign-txt">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingNav;
