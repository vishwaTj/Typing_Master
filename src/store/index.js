import { configureStore } from "@reduxjs/toolkit";
import {TestTextReducer} from './slices/TestText';
import { InputTextReducer } from "./slices/InputText";
import { setTest} from "./slices/TestText";
import { setValue } from "./slices/InputText";


const store  = configureStore({
    reducer:{
        TestText:TestTextReducer,
        InputText:InputTextReducer
    }
});

export {store, setTest, setValue};




