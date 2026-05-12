const Best02 = () => {
  return (
    <section className="best-o2-section">

      <h2 className="section-title">
        Our Best o2
      </h2>

      <div className="best-o2-card">

        <div className="best-left">
          <img src="/plant-pot.png" alt="O2 Plant" />
        </div>

        <div className="best-right">

          <h3>
            We Have Small And Best O2 Plants Collection’s
          </h3>

          <p>
            Oxygen-producing plants, often referred to as “O2 plants,”
            are those that release oxygen into the atmosphere through
            the process of photosynthesis.
          </p>

          <p>
            Many plants can help filter out pollutants and toxins
            from the air, such as formaldehyde, benzene, and
            trichloroethylene. This makes the air cleaner and
            healthier to breathe.
          </p>

          <div className="best-bottom">

            <button className="explore-btn">
              Explore
            </button>

            <div className="slider-nav">
              <span>{"<"}</span>
              <p>01/04</p>
              <span>{">"}</span>
            </div>

          </div>

        </div>

      </div>

      <div className="slider-dots">
        <span className="active-dot"></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
};

export default Best02;