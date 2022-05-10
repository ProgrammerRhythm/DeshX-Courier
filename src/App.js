import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import SignIn from "./Components/SignIn/SignIn";
import CreateOrder from "./Components/CreateOrder/CreateOrder";
function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profileboard" element={<Dashboard/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/createparcel" element={<CreateOrder />} />
        <Route path="/createParcel" element={<CreateOrder />} />
        <Route path="/CreateParcel" element={<CreateOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
