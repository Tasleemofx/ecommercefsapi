import Jumbotron from "./Jumbotron";
import Products from "./Products";
import RandomProduct from "./RandomProduct";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
      <main>
        <Jumbotron />
        <Products />
        <section>
          <div className="row">
            <RandomProduct
              className="col-md-3"
              title="Affordable items"
              description="Unbeatable prices you can always trust."
              where="Home"
            />
            <RandomProduct
              className="col-md-3"
              title="Promos and Bonuses"
              description="Get a 30% discount for purchases more than $500"
              where=" to Products"
            />
            <RandomProduct
              className="col-md-3"
              title="Fast and free deliveries(sometimes)"
              description="We offer free deliveries on numerous items."
              where=" to Login"
            />
          </div>
          <Subscribe />
        </section>
      </main>
    );
}
 
export default Home;