import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Agence from "./Pages/Agence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "./component/Navigate/Navbar";
import FullScreenNav from "./component/Navigate/FullScreenNav";

function App() {
 
  return (
    <div className="overflow-x-hidden">
     <Navbar/>
<FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
