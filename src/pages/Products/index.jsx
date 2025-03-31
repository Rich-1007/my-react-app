import "./style.css";
import card1 from "/t2c/card-1.png";
import card2 from "/t2c/card-2.png";
import card3 from "/t2c/card-3.png";
import card4 from "/t2c/card-4.png";


import { IoIosArrowRoundForward } from "react-icons/io";
const Products = () => {
  return (
    <section className="products-section">
      <div className="heading">
        <h1 className="heading-text-2">Technology, Turbocharged</h1>
        <p className="desc">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nulla velit, maximus sit amet suscipit in, fermentum id est.
          Suspendisse consequat ornare elit.”
        </p>
      </div>

      <div className="main-content">
        <div className="cards-container">
          {/*card */}
          <div className="card">
            <div className="banner-img">
              <img src={card1} />
            </div>

            <div className="text-content">
              <span className="card-title">TurboSend</span>
              <p>
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </p>

              <button className="card-btn">
                <span className="btn-text">Check Now</span>
                <span className="icon">
                  <IoIosArrowRoundForward color="#909DC1" />
                </span>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="banner-img">
              <img src={card2} />
            </div>

            <div className="text-content">
              <span className="card-title">TurboAuth</span>
              <p>
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </p>

              <button className="card-btn">
                <span className="btn-text">Check Now</span>
                <span className="icon">
                  <IoIosArrowRoundForward color="#909DC1" />
                </span>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="banner-img">
              <img src={card3} />
            </div>

            <div className="text-content">
              <span className="card-title">TurboStream</span>
              <p>
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </p>

              <button className="card-btn">
                <span className="btn-text">Check Now</span>
                <span className="icon">
                  <IoIosArrowRoundForward color="#909DC1" />
                </span>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="banner-img">
              <img src={card4} />
            </div>

            <div className="text-content">
              <span className="card-title">TurboCloud</span>
              <p>
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </p>

              <button className="card-btn">
                <span className="btn-text">Check Now</span>
                <span className="icon">
                  <IoIosArrowRoundForward color="#909DC1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Products;
