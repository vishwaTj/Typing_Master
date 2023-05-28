import {createSlice} from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const ResultSlice = createSlice({
    name:"Result",
    //Remember the { gap for curly brace "Oh my god"
    initialState: {
        Accuracy:100,
        WPM:40,
        WPMAverage:[]
    },
    reducers:{
        setAccuracy(state,action){
            let newAccuracy= state.Accuracy-action.payload;
            if(newAccuracy<0){
                newAccuracy=0;
            }
            return {...state,Accuracy:newAccuracy};
        },
        setHundred(state,action){
            console.log(state);
            return {...state,Accuracy:100};
        },
        setWPM(state,action){
            let obj = action.payload;
            let times=60;
            if(obj.timeDiff!==0){
                times = 60/obj.timeDiff;
            }
            let newWPM = obj.number * times;
            let arr= [];
            arr.concat(current(state).WPMAverage);
            arr.push(newWPM);
            let newobj={
                ...current(state),
                WPM:newWPM,
                WPMAverage:arr
            }
            return newobj;
        }
    }
})

export const ResultReducer = ResultSlice.reducer;
export const {setAccuracy, setHundred, setWPM} = ResultSlice.actions;

