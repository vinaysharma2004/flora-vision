const CustomerReview =() => {
    return (
        <section className="review-section">
            <h2 className="section-title">
                Customer Review
            </h2>
            <div className="review-grid">
                <div className="review-box">
                    <div className="review-top">
                        <img src="/review1.jpg" alt="User" className="review-user" />
                        <div>
                            <h3>Shelly Russel</h3>
                            <div className="review-stars">
                                 ★ ★ ★ ★ ★
                            </div>
                        </div>

                    </div>

                    <p>
                        Just got my hands on some absolutely awesome plants, and I couldn't be happier!
                    </p>
                </div>
                <div className="review-box">
                    <div className="review-top">
                        <img src="/review2.jpg" alt="User" className="review-user" />
                        <div>
                            <h3>Lula Rolfson</h3>
                            <div className="review-stars">
                                 ★ ★ ★ ★ ★
                            </div>
                        </div>

                    </div>

                    <p>
                        Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
                    </p>
                </div>
                <div className="review-box">
                    <div className="review-top">
                        <img src="/review3.jpg" alt="User" className="review-user" />
                        <div>
                            <h3>Carol Huels</h3>
                            <div className="review-stars">
                                 ★ ★ ★ ★ ★
                            </div>
                        </div>

                    </div>

                    <p>
                        It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;