import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers:{
        add:(state,action)=>{
            const alreadyClicked = state.find((item)=> item.id === action.payload.id);
            if(alreadyClicked){
                return state.map((item)=>
                    item.id === action.payload.id? { ...item, qty: item.qty + 1} : item
                )
            }else{
             return [...state, { ...action.payload, qty: 1}]
            }
        },
        remove:(state,action)=>{
             state.filter((item)=> item.id !==action.payload.id)
        },
        addItem:(state,action)=>{
            const itemToAdd = state.filter((item)=> item.id === action.payload.id)
            console.log(itemToAdd)
            return [...state, {...itemToAdd, qty: itemToAdd.qty++ }]
        },
        reduceItem: (state, action) => {
            const itemToReduce = state.filter((item) => item.id === action.payload.id)
            console.log(itemToReduce)
            return [...state, { ...itemToReduce, qty: itemToReduce.qty-- }]
        }
    }
})
export const { add, remove, addItem, reduceItem} = itemSlice.actions
export default itemSlice.reducer

