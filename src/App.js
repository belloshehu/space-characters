import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
// import {data} from './components/ItemList'
import './components/styles.css'
import Item from './components/Item';
import {FaCar, FaPlane, FaBicycle} from 'react-icons/fa'
import { useState } from 'react';

const data = [
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

function App() {
  const [vehicles, setVehicles] = useState(data)
  
  function handleItemDrag(result){
    console.log(result)
    const items = Array.from(vehicles)
    const [draggedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, draggedItem)
    setVehicles(items)
  }

  return (
    <div className="App">
      <h3>Vehicles</h3>
      <DragDropContext onDragEnd={handleItemDrag}>
        <ItemList vehicles={vehicles} />
      </DragDropContext>
    </div>
  );
}

export default App;
