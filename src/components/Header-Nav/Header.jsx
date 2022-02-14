import React from 'react'
import './Header.css'
import {ReactComponent as Logo} from '../../Assets/Logo.svg'
import {Link, withRouter} from 'react-router-dom';

const Header=(props)=> {
    return (
        <div className='header'> 
            <Link className='logo'to='/'>
                <Logo/>
            </Link>
            <div className='nav-item sticky'>
                <Link className='item'to='/shop'>SHOP</Link>
                <Link className='item'to='/shop'>CONTACT</Link>
                <Link className='item'to='/signin'>SIGN IN</Link>

            </div>
            

        </div>
    )
}

export default withRouter(Header)
