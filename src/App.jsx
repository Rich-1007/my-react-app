import { useState } from "react";
// import './App.css'
import Hero from "./pages/Hero";
import Testing from "./Testing";
import FormSection from "./pages/FormSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Hero />
      <div className="bg-black ">
        <FormSection />
        <Footer />
      </div>

      {/* <Testing /> */}
    </>
  );
}

export default App;
