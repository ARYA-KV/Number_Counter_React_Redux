import { createSlice } from "@reduxjs/toolkit";

const counterSclice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload

        }

    }

})
export const {increment,decrement,reset,incrementByAmount}=counterSclice.actions
export default counterSclice.reducer