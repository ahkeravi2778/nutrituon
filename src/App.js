import React , { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import Cards from './components/cards';
function App() {
  
   const YOUR_APP_ID = "5bbb2a20";
   const YOUR_APP_KEY = "607ee6ae1fd33c25b9e448f4c31d1382";

  
   useEffect(() =>{
     console.log()
   },[]);

   const getFood = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
      const foods = await response.json();
      console.log(foods);
      console.log("worked!!");
    };
  return (
    <div className="">
      <Header />
      <div>
        <button onClick={getFood}>Readmore</button>
      </div>
      <Cards />
    </div>
  );
}

export default App;
