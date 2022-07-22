 import React from 'react';
 import logo from './csgo.png';
 import './App.css';

class App extends React.Component {

  render(){
    return(
      <div>
          <img src={logo} width="100" height="100" className="logo" />
          <h1 className="app-title">Csgo </h1>
          <div className="container">
            Add an item....
            <br/>
            <input 
            type="text" 
            className="input-text" 
            placeholder="write a Todo"
            />
            <button
              className="add-btn">Add Todo
            </button>

            <div className="list">
              <ul>
                <li>
                  input 
                </li>
              </ul>

            </div>
          </div>
      </div>
     
    )
  }
}
export default App;
