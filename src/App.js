import React, {useState} from "react";
import './App.css';

function App() {
  const [toggle,setToggle] = useState(false);


  const toggler = ()=>{
    toggle?setToggle(false):setToggle(true);
   

  };
  return (
    <>
    {toggle && <p> The Lord is God all the time </p>}
    <br/>
    <br/>

    <button onClick={toggler}>{toggle?"HIDE":"SHOW"}</button>
    </>
  );
}

export default App;
