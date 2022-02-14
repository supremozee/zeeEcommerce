import React, { Component } from 'react'
import Collection from '../../components/Collection/Collection.jsx'
import SHOP_DATA from './2.2 shop.data.js'
import './Shop-page.css'

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className='Shop-page'>
                <div className='shop-title'>Collections</div>
                { 
                    collections.map(collection =>
                        <Collection
                            key={collection.id}
                            title={collection.title}
                            path={collection.routeName}
                            items={collection.items}
                        />
                    )
                }
            </div>
        )
    }
}
