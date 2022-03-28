import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {remove} from "../app/itemSlice"
import TotalItems from './TotalItems'


const Cart = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(state=> state)
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
                <button>
                  +
                </button>
              1 <p className='m-2'>{item.qty}</p>
                <button>
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