import React from 'react'

const Parameters = () => {
  return (
    <div className='Settings'>
        <div className='Grams'>
            <h3>Source</h3>
            <label><input type='radio' className='radio'/>Bigram</label>
            <label><input type='radio' className='radio'/>Trigram</label>
            <label><input type='radio' className='radio'/>Tetragram</label>
            <label><input type='radio' className='radio'/>Words</label>
        </div>
        <div className='Grams'>
            <h3>Scope</h3>
            <label><input type='radio' className='radio'/>Top 50</label>
            <label><input type='radio' className='radio'/>Top 100</label>
            <label><input type='radio' className='radio'/>Top 150</label>
            <label><input type='radio' className='radio'/>Top 200</label>
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