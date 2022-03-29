import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="about" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
