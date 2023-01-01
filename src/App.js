import "./Styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Project from "./Pages/Project";
import ScrollToTop from "./Utils/scrollToTop";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
