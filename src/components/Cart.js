import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {remove} from "../app/itemSlice"
import TotalItems from './TotalItems'


const Cart = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(state=> state)
    const [quantity, setQuantity] = useState(1)
  return (
    <div>
        {cartArray.map(item=>{
          
          return <div key={item.id} className="d-flex flex-column w-100" >
              
                <img src={item.image} className="rounded m-2" width={"100px"}
                height={'100px'} alt="cart-item"  />
              
              <div className="col d-inline-flex m-2">
                <h5 className="card-title m-2">{item.title.substring(0,10)}</h5>
                
                <p
                className='m-2'>${item.price}</p>
                <button 
                onClick={()=> {
                  setQuantity(item.qty + 1)
                  return [...cartArray,{ ...item,qty: quantity}]
                }}>
                  +
                </button>
               <p className='m-2'>{quantity}</p>
                <button 
                onClick={()=> setQuantity(item.qty -1)}>
                  -
                </button>
                <button
                className="btn btn-dark"
                onClick={()=> dispatch(remove(item))}>Remove</button>
              </div>
              <TotalItems/>
          </div>
        })}
    </div>
  )
}

export default Cart