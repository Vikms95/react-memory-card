/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/data';

function App() {
  const [phase, setPhase] = useState<number>(6);
  // Retrieves which index of cards will be retrieved
  // from *data* and then pass it as props to CardsContainer
  const [cards, setCards] = useState<object>(data[phase]);
  const [clickedCards, setClickedCards] = useState<Array<string>>([]);

  const handleClick = (event : SyntheticEvent): void => {
    const element = event.target;
    console.log((event.target as Element).getAttribute('datatype'));
    //   :if clickedCard id is within the array of clickedCards

    //   :reset display
    //   :reset currentScore
    //   early return

    // else:
    //   :setClickedCards array to add this new card's id
    //   :compare the card array length with the clickedCards array length

    //     :if length is equal
    //       :increment the phase variable
    //       :use next card array on display and shuffle

    //     :else
    //       :use same card array and shuffle

  //   :if currentScore is > bestScore
  //     :update bestScore
  //   :update currentScore
  };

  /**
   *Takes cards object and returns an array of cards with the cards shuffled
   */
  const shuffleCards = (sortedCards: object): object[] => (
    Object.values(sortedCards).sort(() => (
      Math.random() - 0.5
    ))
  );

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
        shuffleCards={shuffleCards}
      />
    </main>
  );
}

export default App;
