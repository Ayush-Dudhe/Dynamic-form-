import React from 'react'
import Input from './Elements/Input'
import Select from './Elements/Select';
import Checkbox from './Elements/Checkbox';

const Elements = ({field: {type, label,
placeholder, value, options}}) => {
   
    switch (type) {
        case 'text':
         return (<Input
            
            label = {label}
            value = {value}
                
                />)   
            
        case 'select':
            return (<Select
                
                label = {label}
                field_placeholder ={placeholder}
                value = {value}
                options = {options}
                 />)   
                
        case 'checkbox':
            return (<Checkbox
                
                label = {label}
                value = {value}
            
                />)   
                
        
        default:
            return null;
    }
   
    
}

export default Elements
