import React, { useState, FC } from 'react';
import './App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/data';
import { GeneralProps } from './types/types';

function App() {
  const [phase, setPhase] = useState(0);
  // Retrieves which index of cards will be retrieved
  // from *data* and then pass it as props to CardsContainer
  const [cards, setCards] = useState(data[phase]);

  const handleClick = () => {
    //
    //
    //
  };

  const updateScore = () => {
    //
    //
    //
  };

  return (
    <main className="App">
      <Header />
      <CardsContainer
        cards={cards}
        handleClick={handleClick}
        test={"Hi"}
      />
    </main>
  );
}

export default App;
