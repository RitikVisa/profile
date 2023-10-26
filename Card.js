
import React from 'react'
import logo from '../logo.svg'

function Card({title,content}) {
  return (
    <>
    <div className="card" style={{width: 300}}>
  <img src={logo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Card