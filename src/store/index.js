import { configureStore } from "@reduxjs/toolkit";
import {TestTextReducer} from './slices/TestText';
import { InputTextReducer } from "./slices/InputText";
import { ResultReducer } from "./slices/Result";
import { setTest, nextChapter} from "./slices/TestText";
import { setValue } from "./slices/InputText";
import { setAccuracy,setHundred, setWPM } from "./slices/Result";

const store  = configureStore({
    reducer:{
        TestText:TestTextReducer,
        InputText:InputTextReducer,
        Result:ResultReducer
    }
});

export {store, setTest, setValue, setAccuracy, setHundred, setWPM, nextChapter};




