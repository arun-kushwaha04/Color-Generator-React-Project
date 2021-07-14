import React, { useState, useEffect } from 'react'
import { AiFillCopy} from 'react-icons/ai';
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  let colorValue = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const [alert,setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000);

    return()=> clearTimeout(timeout);
  },[alert])
  
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${colorValue})`}}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    <div className={`copy-div ${index<=10 && 'copy-div-dark'}`}>
      <AiFillCopy className='icon' style={{color: index>10?'black':'white'}}
        onClick={()=>{
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
      ></AiFillCopy>
      {alert && <p className="alert" style={{color: index>10?'black':'white'}}>copied to clipboard</p>}  
    </div>
  </article>
}

export default SingleColor
