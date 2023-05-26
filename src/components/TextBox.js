import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setValue } from '../store';

const TextBox = () => {
  
  const Test = useSelector((state)=>{
    return state.TestText;
  })

  const dispatch = useDispatch();

  const handleChange=(e)=>{
    dispatch(setValue(e.target.value));
  }
  
  return (
    <div className='TextBox'>
        <h2>Lesson 1</h2>
        <input type="text" className='text-input' onChange={handleChange} style={{backgroundColor:"rgba(55,90,127,255)"}}/>
        <input type="Text" className='text-input'/>{Test}
        <div className='performance'>
          <h4 className='Tags'>WPM:</h4>
          <h4 className='Tags'>Accuracy:</h4>
          <h4 className='Tags'>Average WPM:</h4>
        </div>
    </div>
  )
}

export default TextBox;