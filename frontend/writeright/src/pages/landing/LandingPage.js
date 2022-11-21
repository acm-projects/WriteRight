import React from "react";
import "./LandingPage.css";
import landingmain from "../../images/landingmain.png";
import { useNavigate } from "react-router-dom";
import LandingNav from "../../components/landingnav/LandingNav";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="landing-outer-div">
      <LandingNav />
      <div className="landing-section-main">
        <div className="content-main">
          <div className="main-info-1">
            WriteRight is a better way to bring your stories to life
          </div>
          <div className="supporting-info-main">
            Meet the new tool designed to streamline the writing process.
            <br></br>
            Generate and organize ideas, revise content, write stories,<br></br>{" "}
            and more all in one place!
          </div>
          <button className="landing-sign-btn-main" onClick={handleSignUp}>
            Get Started!
          </button>
        </div>
      </div>

      <div className="landing-section-2">
        <div className="img-box-2"></div>
        <div className="content-2">
          <div className="main-info-2">
            Writer's block is a thing of the past
          </div>
          <div className="supporting-info-2">
            WriteRight offers numerous planning pages to help creatives
            efficiently organize their thoughts so that they can focus on what
            matters most, writing!
          </div>
        </div>
      </div>

      <div className="landing-section">
        <div className="content">
          <div className="main-info">Don't have any ideas to organize?</div>
          <div className="supporting-info">
            That's ok too! You can start writing within our app and generate
            them as you go, or you can also refer to our curated list of
            articles that were handpicked to help writers of all skill levels!
          </div>
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
        </div>
        <div className="img-box"></div>
      </div>
    </div>
  );
}
