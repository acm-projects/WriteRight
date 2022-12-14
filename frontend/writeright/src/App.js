import "./App.css";
import SignUp from "./pages/signup/SignUp";
import SignUp2 from "./pages/signup/SignUp2";
import LandingPage from "./pages/landing/LandingPage";
import LoginForm from "./pages/login/LoginForm";
import StoryArc from "./pages/storyarc/StoryArc";
import Grammar from "./pages/grammar/Grammar";
import BlankSheet from "./pages/blankSheet";
import CharacterLog from "./pages/characterLog";
import AtHome from "./pages/atHome";
import LoggedIn from "./pages/LoggedIn";
import WritingTips from "./pages/writingTips";
import MyProjects from "./pages/projects/MyProjects";
import { useLoginStore } from "./stores/LoginStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProject from "./pages/singleProject/SingleProject";
import SingleSheet from "./pages/singleProject/SingleSheet";

function App() {
  const getLogin = useLoginStore((state) => state.login);
  console.log(getLogin);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/*Conditionally Render these pages when user is NOT logged in*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup2" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          {/*When user is logged in, allow these pages to be accessed
          Will change routing when backend is developed*/}
          <Route path="/sheets/story-arc" element={<StoryArc />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/home" element={<LoggedIn />} />
          <Route path="/sheets/blank-sheet" element={<BlankSheet />} />
          <Route path="/sheets/character-log" element={<CharacterLog />} />
          <Route
            path="/sheets/at-home-with-your-character"
            element={<AtHome />}
          />
          <Route path="/sheets/writing-tips" element={<WritingTips />} />
          <Route path="/sign-up" element={<SignUp2 />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/sheets/:id" element={<SingleSheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
