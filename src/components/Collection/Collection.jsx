import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../Collection-Item/Collection-Item';
import './Collection.css'

function Collection(props) {
    return (
        <div className='collection' 
        onClick={() => props.history.push('/signin')}>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    props.items.filter((item, id) => id < 5).map(item =>
                      <CollectionItem
                       key={item.id} 
                       name={item.name} 
                       price = {item.price}
                       imageUrl = {item.imageUrl}
                       />
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(Collection)
