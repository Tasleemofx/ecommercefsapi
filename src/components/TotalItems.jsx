import React, {useMemo, useContext} from 'react'
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
      const contextValue = useContext(finalvalue)
  return (
    <div>
      <h5>
        {finalvalue === 0 ? "No item in cart yet" : "TOTAL:  $" + finalvalue}
      </h5>
    </div>
  );
}

export default TotalItems