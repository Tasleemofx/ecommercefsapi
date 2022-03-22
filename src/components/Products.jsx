import React,{useState, useEffect} from "react";
import axios from "axios";
import ProductNav from "./ProductNav";
import { NavLink } from "react-router-dom";

const Products = () => {

    
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([])
    const [filterable, setFilterable] = useState([]);
    const productEffect=()=> {
      const abortion = new AbortController()
        axios.get('https://fakestoreapi.com/products')
        .then(response=> {
            setData(response.data)
            setFilterable(response.data)
            setCategories(response.data.map(item=>item.category))
            
        })
        abortion.abort();
    }
    
    const handleFilter=(category)=>{
        if(category==="all"){
            setFilterable(data)
            return;
        }
        const filters = data.filter(dataItem=>{
            return dataItem.category === category
        })
        setFilterable(filters)
    }
    
    useEffect(productEffect, [])
    const buttons= ["all", ...new Set(categories)]
    return ( <section>
        <h3 className="text-center"> Our Best Sellers</h3>
        <ProductNav buttons={buttons} onClick={handleFilter} setData={setFilterable}/>
        <div className="row">
        {filterable.map(({ id,image, price, title})=>{
            return (
              <div className="col-md-3 mb-5 mx-auto" key={id}>
                <div className="card h-100 w-100 mx-auto ">
                  <img
                    src={image}
                    className="card-img-top w-50 mx-auto mt-5"
                    alt={`product${id}`}
                    height="200px"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">
                      {title.substring(0, 12)}
                    </h5>
                    <p className="card-text">${price}</p>
                    <NavLink to={`/product/${id}`} className="btn btn-primary">
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            );
        })}
        </div>
        </section>
     );
    }


export default Products;