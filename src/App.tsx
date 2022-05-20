import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/Data';

function App() {
  const [phase, setPhase] = useState(0);
  const [cards, setCards] = useState(
    {
      card1: {

      },
      card2: {

      },
      card3: {

      },
      card4: {

      },
      card5: {

      },
      card6: {

      },
      card7: {

      },
      card8: {
      },
    },
  );

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
      <CardsContainer />
    </main>
  );
}

export default App;
