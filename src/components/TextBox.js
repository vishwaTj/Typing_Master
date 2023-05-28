import React, { useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setValue,setAccuracy,nextChapter, setWPM } from '../store';

var startTime,endTime;
const TextBox = () => {
  
  const TestObject = useSelector((state)=>{
    return state.TestText;
  })

  let {Test , Chapters , currChap} = TestObject;

  const InputText = useSelector((state)=>{
    return state.InputText;
  })

  const {Accuracy, WPM, WPMAverage} = useSelector((state)=>{
    return  state.Result;
  })

  const dispatch = useDispatch();

  const handleChange=(e)=>{
      dispatch(setValue(e.target.value));
      if((e.target.value).length===1){
        console.log("Hello");
      startTime = new Date();}
      handleMatch();
  }  
 
  const handleMatch=useCallback(()=>{
    if(Test === InputText){
      console.log( "a cmoplete match");
      endTime = new Date();
      let timeDiff = endTime - startTime;
      timeDiff/=1000; 
      timeDiff = Math.round(timeDiff);  
      dispatch(setValue(""));
      dispatch(nextChapter(1));
      let number = Test.split(" ").length;
      number-=1;
      let ResObj={timeDiff,number};
      dispatch(setWPM(ResObj));
        return;
     } 
     if(Test.includes(InputText)){
      console.log("good going");
      return;
     }
     else{
      console.log("Wrong Input I got called");
      dispatch(setAccuracy(1));
      return;
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[handleChange])

  let Average = 0;
  for(let i=0;i<WPMAverage.length;i++){
     Average+=WPMAverage[i];
  }
  Average/=WPMAverage.length;

  return (
    <div className='TextBox'>
        <h2>Lesson {currChap+1}/{Chapters}</h2>
        <input 
           type="text"
           className='text-input'
           value={Test}
           style={{backgroundColor:"rgba(55,90,127,255)"}}
           disabled
           />
        <input 
           type="Text" 
           className='text-input user' 
           onChange={handleChange}
           value={InputText}
           />
        <div className='performance'>
          <h4 className='Tags'>WPM: {WPM}</h4>
          <h4 className='Tags'>Accuracy: {Accuracy} %</h4>
          <h4 className='Tags'>Average WPM: {Average!==0 ? WPM:Average}</h4>
        </div>
    </div>
  )
}

export default TextBox;