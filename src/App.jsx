import { useState } from "react";
import "./App.css";
import Testing from "./Testing";
import FormSection from "./pages/FormSection";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials/Testimonials";
import Solution from "./pages/Solution/Solution";
import WhyChoose from "./pages/WhyChoose/WhyChoose";
import About from "./pages/About/About";

function App() {
  return (
    <>
      {/* <Hero /> */}

      {/* <Testing /> */}
      <div className="aboutSection">
        <About />
        <WhyChoose />
      </div>

      <div className="aboutSection">
        <Products />
      </div>
      <div className="aboutSection">
        <Solution />
        <Testimonials />
      </div>
      <div className="footerSection ">
        <FormSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
