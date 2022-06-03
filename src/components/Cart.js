import { useSelector, useDispatch } from 'react-redux'
import {addItem, reduceItem, remove} from "../app/itemSlice"
import TotalItems from './TotalItems'
import { cartValue } from '../context/cartValue'

const Cart = () => {
    const dispatch = useDispatch()
    const cartArray = useSelector(state=> state)
  
  return (
    <div>
        {cartArray.map(item=>{
          return <div key={item.id} className="d-flex flex-column w-100" >
              
                <img src={item.image} className="rounded m-2" width={"70px"}
                height={'70px'} alt="cart-item"  />
              
              <div className="col d-inline-flex m-2">
                <h5 className="card-title m-2">{item.title.substring(0,11)}</h5>
                
                <p
                className='m-2 align-items-center'>${item.price}</p>
                <button 
                className="btn btn-primary"
                onClick={()=> dispatch(addItem(item))
                }>
                  +
                </button>
               <p className='m-2'>{item.qty}</p>
                <button 
                className ="btn btn-primary"
                onClick={() => dispatch(reduceItem(item))}>
                  -
                </button>
                <button
                className="btn btn-dark fs-8"
                onClick={() => dispatch(remove(item)) }>X</button>
              </div>
              
          </div>
        })}
      {<TotalItems />}
      
    </div>
  )
}

export default Cart