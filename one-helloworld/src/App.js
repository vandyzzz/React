import React from "react";
import "./style.css";
import Button from "./Button";

const App=() => {
  return(
    <div>
    <h1 style ={{textAlign:"center"}}> Hello World!!</h1>
    <Button title="Appstore" />
    <Button title="PlayStore"/>

    {/* <button className="button">APP STORE</button>
    <button className="button">PLAY STORE</button> */}

    </div>
  );
  
};
export default App; 