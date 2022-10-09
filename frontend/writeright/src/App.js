import "./App.css";
import LoginForm from "./pages/login/LoginForm";
import SignUp from "./pages/signup/SignUp";
import LoggedIn from "./pages/LoggedIn";
import BlankSheet from "./pages/blankSheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Nav component would go here */}
        {/* Will have to render different pages when user is/isn't logged in */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<LoggedIn />} />
          <Route path="/sheets/blanksheet" element={<BlankSheet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
