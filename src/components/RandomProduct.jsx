import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./random.css"
export default function RandomProduct({title, description, where, className}) {
  const [data, setData] = useState({image: "html"})
  
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20);
    axios.get(`https://fakestoreapi.com/products/${randomNumber}`)
    .then(response=> setData(response.data))
  }, [])
    return (
           <div className={`card mx-auto ${className} mb-5`}>
            <div className="card-body">
              <img src={data.image}
              className='data-img w-50'
              alt="random" height="150px"/>
              <h5 className="card-title">{title}</h5>
              <p className="card-text w-50">
                {description}
              </p>
              <Link to="/" className="btn btn-primary">
                Go {where}
              </Link>
            </div>
          </div>
    );
}

