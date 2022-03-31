import React, {useMemo} from 'react'
import { useSelector} from "react-redux"

const TotalItems = () => {
    const cartArray = useSelector(state=> state)
   
    const sideEffect =()=>{
      const total = [];
        cartArray.forEach((item)=>{
               total.push(item.price*item.qty);
              }) 
        return total      
    }
    const total = useMemo(sideEffect,[cartArray])
    const finalvalue =   total.reduce((val, number) => {
        return val + number;
      }, 0);
  return (
    <div>
        <h5>TOTAL: {finalvalue === 0?"No item in cart yet": "$" + finalvalue}</h5>
    </div>
  )
}

export default TotalItems