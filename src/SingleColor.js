import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  let colorValue = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const [alert,setAlert] = useState(false);
  
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${colorValue})`}}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
  </article>
}

export default SingleColor
