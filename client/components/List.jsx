import React from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'
import ListItem from './ListItem'
import resources from '../../data/resources'

const List = () => {
    return (
        <div className='content'>
            <Carousel />
            <p>
                <ListItem />
                {/*
               {props.resources.map(resource => {
                return (
                <ListItem
                key={resource.id}
                resource={resource}
                />
                )
                })} */}
            </p>
        </div>
    )
}

export default List