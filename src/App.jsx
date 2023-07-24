import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Navbar from "./Components/Navbar"
import CoverPage from "./screens/CoverPage";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/*" element={<Navbar />} />
        </Routes>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;