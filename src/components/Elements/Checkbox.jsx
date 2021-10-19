import React from 'react'

const Checkbox = ({ label, value}) => {
    return (
        <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" 
        value = {value}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">{label}</label>
      </div>
    )
}

export default Checkbox
