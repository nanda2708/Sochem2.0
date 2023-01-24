import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Family from "./pages/Family/Family";
import Home from "./pages/Home/Home";
import Navbar from "./common/Navbar/Navbar";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/family" element={<Family />} />
          </Routes>
        </div>
      </div>      
    </Router>
  );
}