import React from 'react';
import './Solution.css';

import solution1 from "/t2c/solution-1.png"
import solution2 from "/t2c/solution-2.png"


const Solution = () => {
    
    return (
        <div className="solution">
            <h1>Choose Your Solution</h1>
            <h1>For Emerging Businesses</h1>
            <p >Propel your new age business forward with our Solutions:</p>

            <div className="solutions-cards">
                <div className='solution-card solution-card-1'>
                    <div className='solution-card-image'>
                        <img src={solution1} alt="solution bg 1" />
                    </div>
                    <div className="solution-card-content">
                        <div className='solution-card-content-left'>
                        <h3>Plug and Play solutions</h3>
                        <p>Instant Integration, Immediate Impact: Dive into the market without delay, utilizing our fully integrated tech stack that meshes seamlessly with your operations.</p>
                        </div>
                        <button>Customize Your Path</button>
                    </div>
                </div>
                <div className='solution-card solution-card-2'>
                    <div className='solution-card-image'>
                        <img src={solution2} alt="solution bg 2" />
                    </div>
                    <div className="solution-card-content">
                        <div className='solution-card-content-left'>
                        <h3>Customizable Solutions</h3>
                        <p>Tailored solutions designed for your business\'s unique demands & growth trajectory. Build, Expand, Engineer for long-term evolution; these solutions ensure your technology infrastructure grows as dynamically as your business.</p>
                        </div>
                        <button>Accelerate with Plug & Play</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;