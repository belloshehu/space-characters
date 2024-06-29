import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import {FaCar, FaPlane, FaBicycle} from 'react-icons/fa'
import Item from './Item'
import './styles.css'
import { useState } from 'react'

export const data = [
    {
        id: 'car',
        name: 'car',
        Icon: FaCar
    }, 
    {
        id: 'plane',
        name: 'plane',
        Icon: FaPlane
    },
    {
        id: 'bicycle',
        name: 'bicycle',
        Icon: FaBicycle
    }
]

const ItemList = ({vehicles}) => {
  return (
    <Droppable droppableId='list' >
        {
            (provided)=>(
                <ul  
                    className='list' 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                >

                    {
                        vehicles.map((item, index)=><Item {...item} key={index} index={index}/>)
                    }
                    {provided.placeholder}
                </ul>
            )
        }
    </Droppable>
  )
}

export default ItemList