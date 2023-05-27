import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setValue } from '../store';

const TextBox = () => {
  
  const Test = useSelector((state)=>{
    return state.TestText;
  })

  const InputText = useSelector((state)=>{
    return state.InputText;
  })

  const dispatch = useDispatch();

  const handleChange=(e)=>{
      dispatch(setValue(e.target.value));
  }
 
  useEffect(()=>{
    handleMatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[handleChange])
 
  function handleMatch(){
     if(Test.includes(InputText)){
      console.log("good going");
     }
     if(Test === InputText){
      console.log( "a cmoplete match");
        dispatch(setValue(""));
     }
     
  }
  return (
    <div className='TextBox'>
        <h2>Lesson 1</h2>
        <input 
           type="text"
           className='text-input'
           value={Test}
           style={{backgroundColor:"rgba(55,90,127,255)"}}/>
        <input 
           type="Text" 
           className='text-input user' 
           onChange={handleChange}
           value={InputText}
           />
        <div className='performance'>
          <h4 className='Tags'>WPM:</h4>
          <h4 className='Tags'>Accuracy:</h4>
          <h4 className='Tags'>Average WPM:</h4>
        </div>
    </div>
  )
}

export default TextBox;