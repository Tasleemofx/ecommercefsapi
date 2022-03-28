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
             state.filter((item,i)=> i !==state.action.index)
        }
    }
})
export const { add, remove} = itemSlice.actions
export default itemSlice.reducer

