import React from 'react'
import './Collection-Item.css'
// import pic from './header.jpg'
export default function CollectionItem(props) {
    return (
        <div className='Collection-Item'>
            <div 
            className='image hover'
             style={{backgroundImage: `url(${props.imageUrl}})`}}
            />
            <div className='collections-footer'>
                 <span className='name'>{props.name}</span>
                 <span className='price'>{props.price}</span>
             </div>
             
        </div>
    )
}
