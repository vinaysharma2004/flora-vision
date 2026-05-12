const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          <div className="footer-logo">
            <img src="/logo.png" alt="logo" />
            <h2>FloraVision.</h2>
          </div>

          <p>
            “From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment.”
          </p>

          <div className="footer-socials">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>

        </div>

        {/* CENTER */}
        <div className="footer-links">

          <h3>Quick Link’s</h3>

          <a href="#">Home</a>
          <a href="#">Type’s Of plant’s</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <h3>For Every Update.</h3>

          <div className="subscribe-box">

            <input
              type="email"
              placeholder="Enter Email"
            />

            <button>
              SUBSCRIBE
            </button>

          </div>

          <p className="copyright">
            FloraVision © all right reserve
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;