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
             return state.filter(item=> item.id !== action.payload.id)
        },
        addItem:(state,action)=>{
            state.map(item => {
                if (item.id === action.payload.id) {
                    item.qty++
                }
                return state
            })
        },
        reduceItem: (state, action) => {
             state.map(item=>{
                if(item.id===action.payload.id){
                    item.qty--
                }
                return state
            })    
        }
    }
})
export const { add, remove, addItem, reduceItem} = itemSlice.actions
export default itemSlice.reducer

