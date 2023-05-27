import {createSlice} from "@reduxjs/toolkit";
import {bigrams} from '../Grams/Bigram';
import {trigrams} from '../Grams/Trigram';
import {tetragrams} from '../Grams/Tetragram';
import {words} from '../Grams/words';

let Bigram=bigrams;
let Trigram = trigrams;
let Tetragram = tetragrams;
let Words = words; 

const TestSlice = createSlice({
    name:"TestText",
    initialState:"",
    reducers:{
        setTest(State,action){
            let obj=action.payload;
            let TestText="";
            let  i=0;
            while(i<obj.Combination){
              if(obj.Source==="Bigram"){
                 TestText +=Bigram[i];
                 TestText+=" ";
              }
              if(obj.Source==="Trigram"){
                 TestText +=Trigram[i];
                 TestText+=" ";
              }
              if(obj.Source==="Tetragram"){
                 TestText +=Tetragram[i];
                 TestText+=" ";
              }
              if(obj.Source==="Words"){
                 TestText +=Words[i];
                 TestText+=" ";
              }
              i++;
            }
            i=1;
            let sample=TestText;
            while(i<obj.Repition){
               TestText+=sample;
               i++;
            } 
            return TestText;
        }
        
    }
})

export const TestTextReducer = TestSlice.reducer;
export const {setTest} = TestSlice.actions;


