import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </>
    </Router>
  );
}

export default App;