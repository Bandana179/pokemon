/* 
Axios is a library that helps us make HTTP Requests to external resources
In our React applications, we often need to retrieve data from external APIs so it can be displayed in our web pages.
Axios is designed to handle HTTP requests and responses. Axios deals with responses using Promises, so it's streamlined and easy to use in our code. Axios uses methods like get() and post() that perform HTTP GET and POST requests for retrieving or creating resources. 
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App=()=>{
  const[num, setnum]=useState();
  const[name, setname]=useState();
  const[moves , setmoves]=useState();
  useEffect(
    ()=>{
      const getdata=async()=>{
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res);
        setname(res.data.name);
        setmoves(res.data.moves[1].move.name)
      }
      getdata();
    }
  )
  return(
    <>
      <h1>You have selected {num} value</h1>
      <h1>The character is {name}</h1>
      <h1>The character has {moves} moves</h1>
      <select value={num}
       onChange={(event)=>{
         setnum(event.target.value);

       }}>
      <option value='1'>1</option>
      <option value='25'>25</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>




      </select>
    </>
  )

}
export default App;