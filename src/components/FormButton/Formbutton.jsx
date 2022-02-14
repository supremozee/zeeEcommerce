import React from 'react'
import './Formbutton.css'

export default function Formbutton(props) {

    return (

        <div className='form-button hover'>
            <input
                type={props.type}
                value={props.value}
                onSubmit={props.handleSubmit}
            />

        </div>
    )
}