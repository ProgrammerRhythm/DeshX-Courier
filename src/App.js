import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Login from "./Components/LogIn/Login";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Components/SignIn/SignIn";
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profileboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
