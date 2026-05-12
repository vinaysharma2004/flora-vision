import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <nav className="navbar">

          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <h1>FloraVision.</h1>
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>Plants Type</li>
            <li>More</li>
            <li>Contact</li>
          </ul>

          <div className="nav-icons">
            <FiSearch />
            <FiShoppingBag />
            <FiMenu />
          </div>

        </nav>

        <div className="hero-main">

          <div className="hero-left">

            <div className="hero-title-box">
              <h2 className="hero-title">
                Earth’s Exhale
              </h2>
            </div>

            <p className="hero-desc">
              Earth Exhale symbolizes the purity and vitality
              of the Earth’s natural environment and its
              essential role in sustaining life.
            </p>

            <div className="hero-buttons">

              <button className="buy-btn">
                Buy Now
              </button>

              <div className="play-wrapper">

                <div className="play-btn">
                  <FaPlay />
                </div>

                <span className="demo-text">
                  Live Demo...
                </span>

              </div>

            </div>

            <div className="review-card">

              <div className="review-top">

                <img
                  src="/review-user.jpg"
                  alt="user"
                />

                <div>
                  <h4 className="review-name">
                    Ronnie Hamill
                  </h4>

                  <div className="stars">
                    ★★★★★
                  </div>
                </div>

              </div>

              <p className="review-text">
                I can't express how thrilled I am with my
                new natural plants. They bring such a
                fresh and vibrant energy to my home.
              </p>

            </div>

          </div>

          <div className="plant-card">

            <img
              src="/plant-pot.png"
              alt="plant"
              className="plant-image"
            />

            <p className="plant-label">
              Indoor Plant
            </p>

            <div className="plant-row">

              <h3 className="plant-name">
                Aglaonema plant
              </h3>

              <span className="arrow">
                ›
              </span>

            </div>

            <button className="buy-btn card-btn">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;