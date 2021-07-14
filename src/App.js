import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('#f15025');
  const [error,setError] = useState(false);
  const [value,setValue] = useState(10);
  const [list,setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(false);
    try {
      if(parseInt(value) <= 0 )setValue(1);
      let colors = new Values(color).all(parseInt(value));
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  useEffect(() =>{
    setError(false);
    try {
      if(parseInt(value) <= 0 )setValue(1);
      let colors = new Values(color).all(parseInt(value));
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  },[value,color]);
  return (
    <>
      <section className="container">
        <h3>Color Genrator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            placeholder="#f15025"
            className={error?'error':null}
          />
          <input type="number" 
            id='value'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="10"
          />
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((element, index) => {
          return <SingleColor key={index} {...element} index={index} value={value} />;
        })}
      </section>
    </>
  )
}

export default App
