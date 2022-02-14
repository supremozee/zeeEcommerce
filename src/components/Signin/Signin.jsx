import React, { Component } from 'react'
import { signinWithGoogle } from '../../firebase/firebase'
import Formbutton from '../FormButton/Formbutton'
import FormInput from '../FormInput/FormInput'
import './Signin.css'



export default class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert('You are welcome')
    }
    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value }, () => console.log(value))
    }

    render() {
        return (
            <div className='signin'>
                <h1>I already have an account</h1>
                <span>signin with your email and password</span>
                <form
                    className='form' >
                    <FormInput
                        type="email"
                        name="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="form-button">
                        <Formbutton
                            className ="pfrom"
                            type="submit"
                            handleSubmit={this.handleSubmit}
                            value='Sign In'
                        />
                        <Formbutton
                            type="submit"
                            onClick = {signinWithGoogle}
                            value='Sign In with Google'
                        />
                    </div>
                </form>
            </div>
        )
    }
}
