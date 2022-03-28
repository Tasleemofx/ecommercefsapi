import React from 'react'
import { useSelector} from "react-redux"

const TotalItems = () => {
    const cartArray = useSelector(state=> state)
    const total = []
  return (
    <div>
        {
            cartArray.map((item)=>{
              return total.push(item.price*item.qty);
              }) 
        }
        {
          console.log(total)
        }
    </div>
  )
}

export default TotalItems