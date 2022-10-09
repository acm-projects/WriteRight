import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import LandingNav from "../../components/landingnav/LandingNav";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <LandingNav />
      <div className="landing-section">
        <div className="content">
          <div className="main-info">
            Discover a new way to maximize your creative writing potential
          </div>
          <div className="supporting-info">
            WriteRight helps you organize your thoughts, generate new ideas, and
            makes it easy to bring your stories with life!
          </div>
          <button className="landing-sign-btn" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
        <div className="img-box"></div>
      </div>

      <div className="landing-section">
        <div className="content">
          <div className="main-info">
            Simplify the process of bringing your ideas to life
          </div>
          <div className="supporting-info">
            Use our planning tools to reduce time spent creating and organizing
            new ideas and focus valuable time on producing high quality stories
          </div>
          <button className="landing-sign-btn" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
        <div className="img-box"></div>
      </div>

      <div className="landing-section">
        <div className="content">
          <div className="main-info">
            Keep track of your progress, or start working on new ideas!
          </div>
          <div className="supporting-info">
            Save stories and planning pages and come back anytime to pick up
            where you left off, or save it for later and start working on
            something new
          </div>
          <button className="landing-sign-btn" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
        <div className="img-box"></div>
      </div>

      <div className="landing-section">
        <div className="content">
          <div className="main-info">
            Find new sources of knowledge for yourself
          </div>
          <div className="supporting-info">
            Browse our suggested reading material to improve your skills, and
            utilize our writing tools to ensure that your stories are the best
            that they can possibly be
          </div>
          <button className="landing-sign-btn" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
        <div className="img-box"></div>
      </div>
    </div>
  );
}
