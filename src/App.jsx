import React from "react"
import Navbar from "./components/navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Work from "./components/Work"; 
import Skills from "./components/Skills";
import Footer from "./components/Footer";




const App = () => {


  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
