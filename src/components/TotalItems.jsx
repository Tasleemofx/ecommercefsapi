import React from 'react'
import { useSelector} from "react-redux"

const TotalItems = () => {
    const cartArray = useSelector(state=> state)
    const total = []
  return (
    <div>
        {
            cartArray.forEach((item)=>{
               total.push(item.price*item.qty);
              }) 
        }
        {total.reduce((total,number)=>{
            return total + number
        },0)}
        
    </div>
  )
}

export default TotalItems