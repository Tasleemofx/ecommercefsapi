

const Jumbotron = () => {
    return (
      <section className="banner h-75 mx-auto">
        <div className="card bg-dark text-white">
          <img
            src="images/product (3).jpg"
            className="card-img"
            alt="product-example"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <p className="card-text fs-4">
              Shop with us
              <br /> and Feel the difference
            </p>
            <p className="card-text fs-5 fw-bold text-uppercase">The best prices around you</p>
          </div>
        </div>
      </section>
    );
}
 
export default Jumbotron;