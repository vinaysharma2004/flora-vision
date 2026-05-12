const TrendyPlants = () => {
  return (
    <section className="trendy-section">

      <h2 className="section-title">
        Our Trendy plants
      </h2>


      <div className="trendy-card">

        <div className="trendy-left">
          <img src="/trendy-plant1.png" alt="Plant" />
        </div>

        <div className="trendy-right">

          <h3>For Your Desks Decorations</h3>

          <p>
            I recently added a beautiful desk decoration plant
            to my workspace, and it has made such a positive
            difference!
          </p>

          <h4>Rs. 599/-</h4>

          <div className="trendy-buttons">

            <button className="explore-btn">
              Explore
            </button>

            <button className="cart-btn">
              <img src="/bag.png" alt="Bag" />
            </button>

          </div>

        </div>

      </div>


      <div className="trendy-card reverse-card">

        <div className="trendy-left">
          <img src="/trendy-plant2.png" alt="Plant" />
        </div>

        <div className="trendy-right">

          <h3>For Your Desks Decorations</h3>

          <p>
            The greenery adds a touch of nature and serenity
            to my desk, making it feel more inviting and calming
          </p>

          <h4>Rs. 399/-</h4>

          <div className="trendy-buttons">

            <button className="explore-btn">
              Explore
            </button>

            <button className="cart-btn">
              <img src="/bag.png" alt="Bag" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrendyPlants;