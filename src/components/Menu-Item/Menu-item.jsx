import React from 'react'
import './menu-item.css'
import { withRouter } from 'react-router-dom'
// import pic from './header.jpg'

 const MenuItem = (props) => {
    return (
    <div className={`${props.size} menu-item`} 
     onClick={()=> props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <div style={{ backgroundImage: `url(${props.imageUrl})` }}
         className='background-image'/>
                <div className='content'>
                    <h1 className='title'>{props.title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

    )
}
export default withRouter(MenuItem)
