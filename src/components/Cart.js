import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(state=> state)
  return (
    <div>
        {cartArray.map(item=>{
            return <h1 key={item.price.rate}>{item.title}</h1>
        })}
    </div>
  )
}

export default Cart