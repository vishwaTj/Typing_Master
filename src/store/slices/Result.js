import {createSlice} from "@reduxjs/toolkit"

const ResultSlice = createSlice({
    name:"Result",
    //REmember the { gap for curly brace "Oh my god"
    initialState: {
        Accuracy:100,
        WPM:40,
        WPMAverage:[]
    },
    reducers:{
        setAccuracy(state,action){
            return state.Accuracy-1;
        }
    }
})

export const ResultReducer = ResultSlice.reducer;
export const {setAccuracy} = ResultSlice.actions;

