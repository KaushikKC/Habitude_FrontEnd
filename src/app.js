import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Profile1 />} />
        <Route path="/choose" element={<Profile2 />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  