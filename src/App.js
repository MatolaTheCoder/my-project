import React from 'react';
import './App.css';

function App() {
  return <Greet name="Isac"/>
}

function Greet({name}){
  return <h1 className='text-2xl underline'>Hello, {name}</h1>;
}
export default App;
