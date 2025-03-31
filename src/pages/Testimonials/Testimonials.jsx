import React, { useState } from "react";
import "./Testimonials.css";
const testimonialData = [
  {
    quote:
      '"T²C turned our ambitious ideas into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner."',
    name: "Ganesh Iyer",
    company: "Eyemyeye",
  },
  {
    quote:
      '"We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It\'s like having a powerhouse tech team on demand."',
    name: "Rakkim Bharatee",
    company: "PiChain",
  },
  {
    quote:
      "\"Partnering with T²C was a game-changer. Their accelerators, like TurboStream, optimized our video streaming capabilities, helping us deliver a flawless user experience. They didn't just meet our expectations - they redefined what's possible in tech collaboration\"",
    name: "Jaykanth Raj",
    company: "Stealth Mode Startup",
  },
];

const Testimonials = () => {
  const [currentMobileTestimonial, setCurrentMobileTestimonial] = useState(0);

  const handleMobileNext = () => {
    setCurrentMobileTestimonial((prev) => (prev + 1) % testimonialData.length);
  };

  const handleMobilePrev = () => {
    setCurrentMobileTestimonial(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
  };

  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="testimonials-cards"
      >

        
        {testimonialData.map((testimonial, index) => (
          <div className={`testimonials-card testimonial-card-${index}`}>
            <p>{testimonial.quote}</p>
            <div className="author-profile">
              <div className="author-image"></div>

              <div className="author-details">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
