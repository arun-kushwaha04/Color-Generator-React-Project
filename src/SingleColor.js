import React, { useState, useEffect } from 'react'
import { AiFillCopy} from 'react-icons/ai';
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,value}) => {
  let colorValue = rgb.join(',');
  let number = 100/parseInt(value);
  const hex = rgbToHex(...rgb);
  const [alert,setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000);

    return()=> clearTimeout(timeout);
  },[alert])
  
  return <article className={`color ${index > number && 'color-light'}`} style={{backgroundColor: `rgb(${colorValue})`}}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    <div className={`copy-div ${index<=number && 'copy-div-dark'}`}>
      <AiFillCopy className='icon' style={{color: index>number?'black':'white'}}
        onClick={()=>{
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
      ></AiFillCopy>
      {alert && <p className="alert" style={{color: index>number?'black':'white'}}>copied to clipboard</p>}  
    </div>
  </article>
}

export default SingleColor
