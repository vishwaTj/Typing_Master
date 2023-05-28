import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTest } from '../store';
import { setHundred } from '../store';

const Parameters = () => {
  const [wordCheck,setWords] = useState();

  const [param,setParam] = useState({
    Source:"Bigram",
    Combination:1,
    Scope:"Top 50",
    Repition:1
  })

  const Result = useSelector((state)=>{
    return state.Result;
  })

  console.log(Result);;
  
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(setTest(param));
     dispatch(setHundred());
  },[dispatch, param])

const handlechecked=(e)=>{
  let radioCheck = e.target.name;
  setParam({
    ...param,
    Source:radioCheck});
    console.log(param);
    dispatch(setTest(param));
   }

    const handlewords=(e)=>{
        let words = e.target.name;
        setWords(words);
        setParam({
          ...param,
          Scope:words})
    }
  
    const handleCombination=(e)=>{
        let combo = e.target.value;
        setParam({
            ...param,
            Combination:combo
        })
    }

    const handleRepitition=(e)=>{
        let Rep=e.target.value;
        setParam({
            ...param,
            Repition:Rep
        })
    }

  return (
    <div className='Settings'>
        <div className='Grams'>
            <h3>Source</h3>
             <label>
                <input 
                   type='radio'
                   name="Bigram"
                   className='radio'
                   onChange={handlechecked}
                   checked={param.Source==="Bigram"}/>
                   Bigram</label>
            <label><input
                     type='radio'
                     name="Trigram"
                     className='radio'
                     onChange={handlechecked}
                     checked={param.Source==="Trigram"}/>
                     Trigram</label>
            <label><input 
                      type='radio'
                      name="Tetragram"
                      className='radio'
                      onChange={handlechecked}
                      checked={param.Source==="Tetragram"}
                      />Tetragram</label>
            <label><input 
                     type='radio'
                     name='Words'
                     className='radio'
                     onChange={handlechecked}
                     checked={param.Source==="Words"}
                     />Words</label>        
        </div>
        <div className='Grams'>
            <h3>Scope</h3>
            <label><input
                   type='radio'
                   name="Top 50"
                   className='radio'
                   onChange={handlewords}
                   checked={wordCheck==="Top 50"}
                   />Top 50</label>
            <label><input
                   type='radio'
                   name='Top 100'
                   className='radio'
                   onChange={handlewords}
                   checked={wordCheck==="Top 100"}
                   />Top 100</label>
            <label><input 
                   type='radio'
                   name="Top 150"
                   className='radio'
                   onChange={handlewords}
                   checked={wordCheck==="Top 150"}
                   />Top 150</label>
            <label><input
                    type='radio'
                    name="Top 200"
                    className='radio'
                    onChange={handlewords}
                    checked={wordCheck==="Top 200"}
                    />Top 200</label>
        </div>
        <div className='Grams'>
            <h3>Generator</h3>
            <label>Combination</label>
             <input 
               type='number'
               onChange={handleCombination}
               value={param.Combination}
               className='Number-Input'/>
            <label>Repitition</label>
             <input 
               type='number'
               onChange={handleRepitition}
               value={param.Repition}
               className='Number-Input'/>
        </div>
        <div className='Grams'>
             <h3>Threshold</h3>
            <label>WPM</label>
                  <input type='number'
                         defaultValue={40}
                         className='Number-Input'/>
            <label>Accuracy</label>
            <input type='number'
                   defaultValue={Result.Accuracy}
                   className='Number-Input'/>
        </div>
    </div>
  )
}

export default Parameters;