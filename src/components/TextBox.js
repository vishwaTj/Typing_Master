import React, { useCallback } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setValue,setAccuracy } from '../store';

const TextBox = () => {
  
  const Test = useSelector((state)=>{
    return state.TestText;
  })

  const InputText = useSelector((state)=>{
    return state.InputText;
  })

  const Accuracy = useSelector((state)=>{
    console.log(state.Result);
    return  state.Result.Accuracy;
  })

  const dispatch = useDispatch();

  const handleChange=(e)=>{
      dispatch(setValue(e.target.value));
      handleMatch();
  }  
 
  const handleMatch=useCallback(()=>{
    if(Test === InputText){
      console.log( "a cmoplete match");
        dispatch(setValue(""));
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


  return (
    <div className='TextBox'>
        <h2>Lesson 1</h2>
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
          <h4 className='Tags'>WPM:</h4>
          <h4 className='Tags'>Accuracy:{Accuracy}</h4>
          <h4 className='Tags'>Average WPM:</h4>
        </div>
    </div>
  )
}

export default TextBox;