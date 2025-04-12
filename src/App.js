import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Legalnotice1 from "./components/Legalnotice1";
import Legalnotice2 from "./components/Legalnotice2";
import Legalnotice3 from "./components/Legalnotice3";
import Modale from "./components/Modale";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legalnotice1" element={<Legalnotice1 />} />
        <Route path="/Legalnotice2" element={<Legalnotice2 />} />
        <Route path="/Legalnotice3" element={<Legalnotice3 />} />
        <Route path="/Modale" element={<Modale />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
