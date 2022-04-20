import React, {useState} from "react"
import Footer from './components/Footer';
import Home from './components/Home';
import Products from "./components/Products"
import Product from "./components/Product"
import Navbar from './components/Navbar';
import About from './components/About';
import Login from "./components/Login"
import Cart from "./components/Cart";
// import Error from "./components/Error"
import Checkout from "./components/Checkout";
import { Routes, Route } from 'react-router-dom'
import { cartValue } from "./context/cartValue";
import Error from "./components/Error";

function App() {
  
  const [value, setValue]= useState(0) 
  return (

        <div className="container-fluid">
      
          <Navbar/>
        <cartValue.Provider value={{value, setValue}}>
          <Routes>
            
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Products" index element={<Products/>} />
              <Route path="/product/:id" element={<Product/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/error" element={<Error/>} />
              <Route path="/checkout" element={<Checkout/>} />
            
          </Routes>
      </cartValue.Provider>
          <Footer/>   
            
          </div>
    
  );
}

export default App;
