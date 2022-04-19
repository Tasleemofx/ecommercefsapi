import React, {useMemo, useContext, useState} from 'react'
import { useSelector } from "react-redux"
import { cartValue } from '../context/cartValue'
import { NavLink } from "react-router-dom";

const TotalItems = ({finalvalue}) => {
    const cartArray = useSelector(state=> state)
    const {value, setValue} = useContext(cartValue)
    const sideEffect =()=>{
      const total = [];
        cartArray.forEach((item)=>{
               total.push(item.price*item.qty);
              }) 
        return total      
    }
    const total = useMemo(sideEffect,[cartArray])
    finalvalue =   total.reduce((val, number) => {
        return val + number;
      }, 0);
    
  return (
    <div>
      <h5>
        {finalvalue === 0 ? "No item in cart yet" : ` Total : $ ${finalvalue}`}
        
      </h5>
      <NavLink to="/checkout">
        <button className="btn btn-info mb-3"
        onClick={()=>setValue(finalvalue)}
        >Proceed to checkout</button>
      </NavLink>
    </div>
  );
}
export default TotalItems;