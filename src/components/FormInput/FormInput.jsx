import React from 'react'
import './FormInput.css'

export default function FormInput(props) {
    return (
        <div className='container'>
            {
                props.label ?
                    (<label className={`${props.value.length ? 'shrink' : ''} form-label`}>
                        {props.label}
                    </label>)
                    : null
            }
            <input
                className='form-input'
                onChange={props.handleChange}
                type={props.type}
                name={props.name}
                label={props.label}
                // value={props.value}
            />
        </div>
    )
}
