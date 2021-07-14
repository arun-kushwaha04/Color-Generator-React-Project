import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(false);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }
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
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((element, index) => {
          return <SingleColor key={index} {...element} index={index}>

          </SingleColor>
        })}
      </section>
    </>
  )
}

export default App
