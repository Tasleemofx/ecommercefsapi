
const Jumbotron = () => {
    return (
      <section className="banner mx-auto">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner w-75 mx-auto">
            <div className="carousel-item active">
              <img
                src="images/cotton.jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h5>Your style matters to us</h5>
                <p>Let's make you fashionable</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/lipstick.jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block bg-success">
                <h5>Shop with us</h5>
                <p>
                  Feel the difference. Quality and quantity, we have it all.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/product (3).jpg"
                className="d-block w-100"
                alt="..."
                height="500px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Latest products</h5>
                <p>
                  Get the best products at the the lowest possible prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default Jumbotron;