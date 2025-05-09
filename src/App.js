import React from "react";
import "./components/css/Global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import Contact from "./pages/Contact";
import Legalnotice from "./pages/Legalnotice";
import Modale from "./components/Modale";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Legalnotice" element={<Legalnotice />} />
          <Route path="/Modale" element={<Modale />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
