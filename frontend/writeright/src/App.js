import "./App.css";
import SignUp from "./pages/signup/SignUp";
import LandingPage from "./pages/landing/LandingPage";
import LoginForm from "./pages/login/LoginForm";
import StoryArc from "./pages/storyarc/StoryArc";
import Grammar from "./pages/grammar/Grammar";
import LoggedIn from "./pages/LoggedIn";
import BlankSheet from "./pages/blankSheet";
import CharacterLog from "./pages/characterLog";
import AtHome from "./pages/atHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Conditionally Render these pages when user is NOT logged in*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          {/*When user is logged in, allow these pages to be accessed
          Will change routing when backend is developed*/}
          <Route path="/story-arc" element={<StoryArc />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/home" element={<LoggedIn />} />
          <Route path="/sheets/blank-sheet" element={<BlankSheet />} />
          <Route path="/sheets/character-log" element={<CharacterLog />} />
          <Route
            path="/sheets/at-home-with-your-character"
            element={<AtHome />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
