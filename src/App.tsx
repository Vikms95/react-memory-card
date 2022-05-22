/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/data';

function App() {
  const [phase, setPhase] = useState<number>(2);
  // Retrieves which index of cards will be retrieved
  // from *data* and then pass it as props to CardsContainer
  const [cards, setCards] = useState<object>(data[phase]);

  const handleClick = (): void => {
    console.log('Hi');
    //
    //
  };

  const updateScore = () => {
    //
    //
    //
  };

  return (
    <main className="general-container">
      <Header />
      <CardsContainer
        cards={cards}
        handleClick={handleClick}
      />
    </main>
  );
}

export default App;
