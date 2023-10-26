import React from 'react'

function Child({handleInput}) {
  return (
    <div>
        <h1>this is child</h1>
        <input onChange={e=>{handleInput(e.target.value)}} type="text" placeholder='enter your name' />
        <hr />
    </div>
  )
}

export default Child