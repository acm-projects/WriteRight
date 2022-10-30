import "./App.css";
import LoginForm from "./pages/login/LoginForm";
import SignUp from "./pages/signup/SignUp";
import LoggedIn from "./pages/LoggedIn";
import BlankSheet from "./pages/blankSheet";
import CharacterLog from "./pages/characterLog";
import AtHome from "./pages/atHome";
import StoryArc from "./pages/storyarc/StoryArc";
import WritingTips from "./pages/writingTips";
import Grammar from "./pages/grammar/Grammar";
import LandingPage from "./pages/landingpage/LandingPage";
import Sheets from "./pages/sheets";
import MyProjects from "./pages/myProjects";
import Project from "./pages/Project";
import UserSheet from "./pages/userSheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Nav component would go here */}
        {/* Will have to render different pages when user is/isn't logged in */}
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<LoggedIn />} />
          <Route path="/sheets/blank-sheet" element={<BlankSheet />} />
          <Route path="/sheets/character-log" element={<CharacterLog />} />
          <Route path="/sheets/at-home-with-your-character" element={<AtHome />} />
          <Route path="/writing-tips" element={<WritingTips />} />
          <Route path="/sheets/story-arc" element={<StoryArc />} />
          <Route path="/grammar-checker" element={<Grammar />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/my-projects/project" element={<Project />} />
          <Route path="/my-projects/project/sheet" element={<UserSheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
