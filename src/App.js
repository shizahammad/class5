import React,{useState} from 'react';
import Parent from './Parent.js'
import './App.css';
import counterContext from './CounterContext';
function App() {
  const count =useState(0)
  return (
    <counterContext.Provider value={count}>
    <div >
     <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
