import "./App.css";
import Login from "./pages/login/LoginForm";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Nav component would go here */}
        {/* Will have to render different pages when user is/isn't logged in */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
