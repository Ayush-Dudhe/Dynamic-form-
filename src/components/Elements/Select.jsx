import React from 'react'

const Select = ({ label,
    placeholder, value, options}) => {
    return (
        <>
        <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
        <select className="form-select" aria-label="Default select example">
        <option >Open this select menu</option>
        {options.length > 0 && options.map((option,i) => 
        <option value ={option.option_label} key={i} >
        {option.label}
       </option>

  )}
    </select>
    </>
    )
}



export default Select
