import React from 'react'

const Input = ({ label,
     value}) => {
    return (
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    
    value = {value}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
    )
}

export default Input
