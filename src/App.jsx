import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMsg from './components/ErrorMsg';
import FoodItems from './components/FoodItems';
import { useState } from 'react';

function App() {
  const [inputItem, setInputItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newItem = event.target.value;
      const newArrayOfItem = [...inputItem, newItem];
      setInputItem(newArrayOfItem);
    }
  }

  // const deleteItem = (idx) => {
  //   setInputItem((oldItems) => {
  //     return oldItems.filter((ele, index) => {
  //       return index !== idx;
  //     })
  //   })
  // }


  return (
    <>
      <div className="main-container">
        <div className='food-item'>
          <h1 className='title'>Healthy Food Table</h1>
          <input
            className='inp-css'
            type="text"
            placeholder='Add Item'
            onKeyDown={onKeyDown}
          />
        </div>
        <br />
        <br />
        <ErrorMsg items={inputItem} />
        <FoodItems items={inputItem} />
      </div>
    </>
  );
}

export default App
