import { configureStore } from "@reduxjs/toolkit";
import {TestTextReducer} from './slices/TestText';
import { setValue } from "./slices/TestText";


const store  = configureStore({
    reducer:{
        TestText:TestTextReducer
    }
});

export {store,setValue};




