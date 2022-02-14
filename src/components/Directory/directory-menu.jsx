import React, { Component } from 'react'
import './directory-menu.css'
import MenuItem from '../Menu-Item/Menu-item';
import {Sections } from './10.1 directory.data.js';
export default class Directory extends Component {
    constructor(props) {
        super(props)
        this.state = {
           Section: Sections,
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.Section.map(section=> {
                       return <MenuItem
                         key={section.id}
                         title={section.title}
                         imageUrl={section.imageUrl}
                         linkUrl={section.linkUrl}
                         size ={section.size}
                         />
                    } ) 
                       
                    
                }
            </div>
        )
    }
}
