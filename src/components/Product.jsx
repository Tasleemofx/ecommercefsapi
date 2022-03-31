import React, {useEffect, useState} from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { add } from "../app/itemSlice";
import { BiArrowBack } from "react-icons/bi"
import { NavLink } from "react-router-dom";

const Product = () => {
  // const itemsArray = useSelector((state) => state);
  const dispatch = useDispatch();
    const [product, setProduct] = useState(null)
    const {id}= useParams();
    useEffect(() => {
      let cancel = false;

      
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=> {
          if (cancel) return;
          setProduct(response.data)
        });
         return ()=>{
           cancel = true
         }
        }, [id, product])
    if( product === null){
        return( 
        <Skeleton count={7}/>
        )
    }
    

    return (
      <section className="row">
        <div className="col-md-5">
          <NavLink to="/Products">
            <BiArrowBack />
          </NavLink>

          <img
            src={product.image}
            alt={product.title}
            height="300em"
            className="m-5 w-50"
          />
        </div>

        <div className="col-md-7">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            {product.rating.rate}
            <span>
              {product.rating.rate <= 1.5 ? (
                <AiFillStar className="text-warning"></AiFillStar>
              ) : product.rating.rate <= 2.5 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : product.rating.rate <= 3.5 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : product.rating.rate <= 4.5 ? (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              ) : (
                <>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                  <AiFillStar className="text-warning"></AiFillStar>
                </>
              )}
            </span>
          </p>
          <p className="fst-italic">{product.category}</p>
          <h4>${product.price}</h4>
          <button
            className="btn btn-dark m-2"
            onClick={() => {
              dispatch(add(product));
            }}
          >
            Add to cart
          </button>
          <a href="tel:07038655608">
            <button className="btn btn-dark m-2">
              Call to Order <BsTelephoneFill></BsTelephoneFill>
            </button>
          </a>
        </div>
      </section>
    );
}
 
export default Product;