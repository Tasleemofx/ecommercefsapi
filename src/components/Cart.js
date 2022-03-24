import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {remove} from "../app/itemSlice"

const Cart = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(state=> state)
  return (
    <div>
        {cartArray.map(item=>{
          
          return <div key={item.id} className="d-inline-flex w-100" >
            <img src={item.image} className="rounded m2" width={"100px"}
            height={'100px'} alt="cart-item"  />
              <div className="d-inline-flex m1">
                <h5 className="card-title m1">{item.title}</h5>
                <p className="card-text m1">{item.category}</p>
                <p>${item.price}</p>
                <button
                onClick={()=> dispatch(remove(item))}>Remove</button>
              </div>
          </div>
        })}
    </div>
  )
}

export default Cart