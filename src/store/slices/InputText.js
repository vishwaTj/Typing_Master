import { createSlice } from "@reduxjs/toolkit";

const InputTextSlice = createSlice({
    name:"InputText",
    initialState:[],
    reducers:{
        setValue(State,action){
            return action.payload;
        }
    }
})

export const InputTextReducer = InputTextSlice.reducer;
export const {setValue} = InputTextSlice.actions;






