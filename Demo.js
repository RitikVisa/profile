import React, { useRef, useState } from 'react'

function Demo(){
    const [style,setStyle] = useState(0)
    const inputRef= useRef()
    const [age,setAge] = useState(0)
  return (
    <div>
        <button onClick={()=>{
            setStyle(1)
        }}>Change Style</button>
        <p style={style===1?{fontFamily:'monospace'}:{fontFamily:'sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti!</p>
        <hr />
        <input ref={inputRef} type="text" placeholder='Enter Your Age' />
        <button onClick={()=>{
            console.log(inputRef.current.value);
            setAge(inputRef.current.value)
        }}>Check To Vote</button>
        {age>17 &&<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ut?</p>}
    </div>
  )
}

export default Demo