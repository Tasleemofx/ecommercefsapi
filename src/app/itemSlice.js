import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers:{
        add:(state,action)=>{
             state.push(action.payload)
        },
        remove:(state,action)=>{
             state.filter((item,i)=> i !==state.action.index)
        }
    }
})
export const { add, remove} = itemSlice.actions
export default itemSlice.reducer

