import Footer from './components/Footer';
import Home from './components/Home';
import Products from "./components/Products"
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (<div className="container-fluid">
            <Navbar />
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products/>}/> */}
              <Home /> 
            {/* </Routes> */}          
            <Footer />
            
          </div>
  );
}

export default App;
