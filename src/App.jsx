import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../Components/navbar";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";
import Footer1 from "../Components/Footer";

import ScrollToTop from "./ScrollToTop.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer1></Footer1>
      </BrowserRouter>
    </>
  );
}

export default App;
