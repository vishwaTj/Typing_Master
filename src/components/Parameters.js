import React, { useState } from 'react'

const Parameters = () => {
  const [checkGram,setCheckedGram] = useState();
  const [wordCheck,setWords] = useState();

const handlechecked=(e)=>{
  let radioCheck = e.target.name;
  setCheckedGram(radioCheck);
}

const handlewords=(e)=>{
    let words = e.target.name;
    setWords(words);
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
                   onClick={handlechecked}
                   checked={checkGram==="Bigram"}/>
                   Bigram</label>
            <label><input
                     type='radio'
                     name="Trigram"
                     className='radio'
                     onClick={handlechecked}
                     checked={checkGram==="Trigram"}/>
                     Trigram</label>
            <label><input 
                      type='radio'
                      name="Tetragram"
                      className='radio'
                      onClick={handlechecked}
                      checked={checkGram==="Tetragram"}
                      />Tetragram</label>
            <label><input 
                     type='radio'
                     name='Words'
                     className='radio'
                     onClick={handlechecked}
                     checked={checkGram==="Words"}
                     />Words</label>
        </div>
        <div className='Grams'>
            <h3>Scope</h3>
            <label><input
                   type='radio'
                   name="Top 50"
                   className='radio'
                   onClick={handlewords}
                   checked={wordCheck==="Top 50"}
                   />Top 50</label>
            <label><input
                   type='radio'
                   name='Top 100'
                   className='radio'
                   onClick={handlewords}
                   checked={wordCheck==="Top 100"}
                   />Top 100</label>
            <label><input 
                   type='radio'
                   name="Top 150"
                   className='radio'
                   onClick={handlewords}
                   checked={wordCheck==="Top 150"}
                   />Top 150</label>
            <label><input
                    type='radio'
                    name="Top 200"
                    className='radio'
                    onClick={handlewords}
                    checked={wordCheck==="Top 200"}
                    />Top 200</label>
        </div>
        <div className='Grams'>
            <h3>Generator</h3>
            <label>Combination</label><input type='number' className='Number-Input'/>
            <label>Repitition</label><input type='number'  className='Number-Input'/>
        </div>
        <div className='Grams'>
             <h3>Threshold</h3>
            <label>WPM</label><input type='number' className='Number-Input'/>
            <label>Accuracy</label><input type='number'  className='Number-Input'/>
        </div>
    </div>
  )
}

export default Parameters;