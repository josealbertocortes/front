import React, { useState } from 'react'

import './App.css';
import { useForm } from './useForm/useForm';

function App() {

  const [error,setError]=useState(false)
  const  [ {nombre,password}, handleInputChange ] =useForm({nombre:"",password:""})
  const create= async (e)=>{
    e.preventDefault()
    let body={nombre,password}
    try {
      const res = await fetch("http://127.0.0.1:4200/user",{method:"POST",body:JSON.stringify(body)})
      if(res.status===500) setError(true)
    } catch (error) {
   
    }

  }
  const reintentar =()=>{
    setError(!error)
  }

  return (
    <div className="App">
      <header className="App-header">
        {error?(<p>hubo un error <button onClick={reintentar}> reintentar</button> </p>):
        <form onSubmit={create}>
        <input  name="nombre" value={nombre} type="text" onChange={handleInputChange} />
        <input  name="password" value={password} type="password" onChange={handleInputChange} />
        <button type="submit">crear</button>
      </form>
        }
       
      </header>
    </div>
  );
}

export default App;
