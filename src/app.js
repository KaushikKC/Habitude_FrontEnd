import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Profile1 from "./pages/Profile1";
import Profile2 from "./pages/Profile2";
import Profile3 from "./pages/Profile3";
import { Web3Provider } from "./Web3Provider";



function App() {
    return (
        <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Profile1 />} />
        <Route path="/choose" element={<Profile2 />} />
        <Route path="/add" element={<Profile3 />} />
        </Routes>
      </BrowserRouter>
      </Web3Provider>
    );
  }
  
  export default App;
  