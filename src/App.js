import React from 'react';
import './App.css';
import Parameters from './components/Parameters';
import TextBox from './components/TextBox';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='Body'>
        <div className='Parameters'>
            <Parameters/>
        </div>
        <div className='Texts'>
          <TextBox />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default App;