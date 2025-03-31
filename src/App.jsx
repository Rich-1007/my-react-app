import { useState } from "react";
import "./App.css";
import Testing from "./Testing";
import FormSection from "./pages/FormSection";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials/Testimonials";

function App() {
  return (
    <>
      {/* <Hero /> */}

      {/* <Testing /> */}

      <div className="aboutSection">
        
      <Testimonials />
        {/* <Products /> */}</div>
      <div className="footerSection ">
        <FormSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
