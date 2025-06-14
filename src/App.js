import React, { useState, useEffect } from "react";
import Preloader from "../src/Components/ExtraComponents/Pre";
import Navbar from "./Components/ExtraComponents/Navbar";
import Home from "./Components/HomeSection/Home";
import About from "./Components/AboutSection/About";
import Projects from "./Components/ProjectSection/Projects";
import Footer from "./Components/ExtraComponents/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./Components/ExtraComponents/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
        <SpeedInsights projectId="prj_M3jLQyJqwtIH26wUrkHU5IyIjb9P"/>
      </div>
    </Router>
  );
}

export default App;
