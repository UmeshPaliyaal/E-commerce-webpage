
const HeroSection = () => {
    return(
      <main className="hero container">
        <div>
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Whether you are wondering if you should buy those shoes the answer
                <br />
                 is always yes or just looking for a little shoe inspiration
                 here are our favourite quotations on shoes.</p>
        </div>
        <div className="hero-btn">
            <button id="btnone">Shop-Now</button>
            <button id="btntwo">Catagory</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
        </div>
        <div className="brand-icon">
            <img src="images/Flipkart.jpg" alt="flipkart-logo" />
            <img src="images/amazon.jpg" alt="amazon-logo" />
        </div>
        </div>
        <div className="hero-img">
            <img src="images/shoe2.jpg" alt="" />
        </div>
      </main>
    )
};


export default HeroSection;