import {createSlice} from "@reduxjs/toolkit";
import {bigrams} from '../Grams/Bigram';
import {trigrams} from '../Grams/Trigram';
import {tetragrams} from '../Grams/Tetragram';
import {words} from '../Grams/words';

let Bigram=bigrams;
let Trigram = trigrams;
let Tetragram = tetragrams;
let Words = words; 



function setCombo(Stateobj){
     let obj=Stateobj;
     let TestText="";
     let num = obj.currChap;
     let  i=0;
      while(i<obj.combo){
         if(obj.Source==="Bigram"){
            TestText +=Bigram[num+i];
            if(obj.combo!==1 || i!==(obj.combo-2)){
            TestText+=" ";}
         }
         if(obj.Source==="Trigram"){
            TestText +=Trigram[num+i];
            if(obj.combo!==1 || i!==(obj.combo-2)){
               TestText+=" ";}
         }
         if(obj.Source==="Tetragram"){
            TestText +=Tetragram[num+i];
            if(obj.combo!==1 || i!==(obj.combo-2)){
               TestText+=" ";}
         }
         if(obj.Source==="Words"){
            TestText +=Words[num+i];
            if(obj.combo!==1 || i!==(obj.combo-2)){
               TestText+=" ";}
         }
         i++;
      }
      i=1;
      let sample=TestText;
      while(i<obj.Repition){
         TestText+=sample;
         i++;
      }
      console.log(TestText);
      return TestText;
}

const TestSlice = createSlice({
    name:"TestText",
    initialState:{
      Test:"",
      Chapters:50,
      currChap:0,
      Source:"Bigram",
      combo:1,
      Repetition:1
    },
    reducers:{
        setTest(State,action){
            let obj=action.payload;
            let TestText="";
            let  i=0;
            while(i<obj.Combination){
              if(obj.Source==="Bigram"){
                 TestText +=Bigram[i];
                 if(obj.Combination!==1 || i!==(obj.Combination-2)){
                  TestText+=" ";}
              }
              if(obj.Source==="Trigram"){
                 TestText +=Trigram[i];
                 if(obj.Combination!==1){
                    TestText+=" ";}
              }
              if(obj.Source==="Tetragram"){
                 TestText +=Tetragram[i];
                 if(obj.Combination!==1){
                    TestText+=" ";}
              }
              if(obj.Source==="Words"){
                 TestText +=Words[i];
                 if(obj.Combination!==1){
                    TestText+=" ";}
              }
              i++;
            }
            i=1;
            let sample=TestText;
            while(i<obj.Repition){
               TestText+=sample;
               i++;
            }
            let newNum = obj.Combination;
            let chapters=0;
            if(obj.Scope==="Top 50"){
               chapters=Math.round(200/newNum);
            }
            else if(obj.Scope==="Top 100"){
               chapters=Math.round(100/newNum);
            }
            else if(obj.Scope==="Top 150"){
               chapters=Math.round(150/newNum);
            }
            else if(obj.Scope==="Top 200"){
               chapters=Math.round(200/newNum);
            }
            let newTestObj={
               Test:TestText,
               Chapters:chapters,
               currChap:0,
               Source:obj.Source,
               combo:obj.Combination,
               Repetition: obj.Repetition
            }
            return newTestObj;
        },
        nextChapter(State,action){
          console.log(action.payload);
          let obj=State;
          let newchapter = obj.currChap+1;
          if(newchapter === obj.Chapters){
            newchapter=0;
          }
          obj={
               ...obj,
               currChap:newchapter}
          let newTestString = setCombo(obj);
          console.log(newTestString);

          obj={
            ...obj,
            Test:newTestString
          }

         return obj;
        }
        
    }
})

export const TestTextReducer = TestSlice.reducer;
export const {setTest, nextChapter} = TestSlice.actions;


