import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardList from './components/CardList';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  

  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
      .then(response => setCharacter(response.data.results))
      .catch(err => console.log(err));
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <CardList character={character}/>



      
    </div>
  );
}



export default App;


