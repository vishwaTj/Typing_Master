import {createSlice} from "@reduxjs/toolkit";

const TestSlice = createSlice({
    name:"TestText",
    initialState:"",
    reducers:{
        setValue(state,action){
            return action.payload;
        }
        
    }
})

export const TestTextReducer = TestSlice.reducer;
export const {setValue} = TestSlice.actions;