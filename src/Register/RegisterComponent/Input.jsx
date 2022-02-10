import React from "react";

const Input = ({type, name, placeholder, className, onChange}) => {
    return (
        <div>
        <label>
            
        </label><input type={type} name={name} placeholder={placeholder} className={className} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}

export default Input;