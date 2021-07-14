import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);

  const handleSubmit = ()=>{
    console.log('hi');
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
          />
          <button className="btn">generate</button>
        </form>
      </section>
      <section className="colors">
        color list to be displayed here
      </section>
    </>
  )
}

export default App
