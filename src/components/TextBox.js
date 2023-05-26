import React from 'react'

const TextBox = () => {
  return (
    <div className='TextBox'>
        <h2>Lesson 1</h2>
        <input type="text" className='text-input' style={{backgroundColor:"rgba(55,90,127,255)"}}/>
        <input type="Text" className='text-input'/>
        <div className='performance'>
          <h4 className='Tags'>WPM:</h4>
          <h4 className='Tags'>Accuracy:</h4>
          <h4 className='Tags'>Average WPM:</h4>
        </div>
    </div>
  )
}

export default TextBox;