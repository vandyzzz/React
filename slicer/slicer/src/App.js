import './App.css';
import { useState } from 'react';

function App() {
  const [items, setitems] = useState(["a", "b", "c"]);

  const handleChangeOfItems = (newInput, index) => {
    setitems(prevItems=>
      prevItems.map((item,idx)=> idx === index ? newInput : item)
    )
  }

  const addElement = (ind) => {
    setitems((prevItems) =>[...prevItems.slice(0, ind + 1),"_",...prevItems.slice(ind+1)] )
  }

  const combinedString = items.join(',')
  return (
    <div className="App">
      <header className="App-header">
        {
          items?.map((item, ind) => {
            return (
              <div className='item' key={ind}>
                {ind === items.length - items.length && <span onClick={()=> addElement(ind-1)} className='addBeforeFirstelement'></span>}
                <input type="text" minlength="1" maxlength="1"  value={item} onChange={(e) => handleChangeOfItems(e.currentTarget.value, ind)} />
                {ind < items.length -1 &&  <span onClick={()=> addElement(ind)} className='addElement'></span> }
              </div>
            )
          })
          
        }
        {combinedString}
      </header>
    </div>
  );
}

export default App;
