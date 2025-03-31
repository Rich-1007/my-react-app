import React from 'react'
import './WhyChoose.css'

import why_1 from "/t2c/why choose/why-1.png"
import why_2 from "/t2c/why choose/why-2.png"
import why_3 from "/t2c/why choose/why-3.png"
import why_4 from "/t2c/why choose/why-4.png"

const WhyChoose = () => {
  return (
    <div className='why-choose'>
        <h1>Why Choose TSquaredC </h1>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”</p>
        <div className='why-choose-cards'>
            <img src={why_1} alt="why 1" />
            <img src={why_2} alt="why 2" />
            <img src={why_3} alt="why 3" />
            <img src={why_4} alt="why 4" />
        </div>
    </div>
  )
}

export default WhyChoose