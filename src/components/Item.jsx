import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './styles.css'

const Item = ({id, name, Icon, index}) => {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {
        (provided)=>(
          <li 
            className='list-item' 
            ref={provided.innerRef} 
            {...provided.dragHandleProps} 
            {...provided.draggableProps}
          >
              <span>{name}</span>
              <span className='icon'>
                <Icon />
              </span>
          </li>
        )
      }
    </Draggable>
  )
}

export default Item