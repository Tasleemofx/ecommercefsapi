const Subscribe = () => {
    return (
      <>
        <p>
          Join our Newsletter to get latest updates on new arrivals and trending
          fashion
        </p>
        <form className="text-center mb-5">
          <input
            type="email"
            placeholder="example@email.com"
            className="w-75 bg-dark text-light"
          />
          <button className="bg-primary text-light">Subscribe</button>
        </form>
      </>
    );
}
 
export default Subscribe;