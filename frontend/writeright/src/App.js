import "./App.css";
import SignUp from "./pages/signup/SignUp";
import LandingPage from "./pages/landing/LandingPage";
import LoginForm from "./pages/login/LoginForm";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
