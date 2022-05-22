/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/data';

function App() {
  const [phase, setPhase] = useState<number>(6);
  const [cards, setCards] = useState<object>(data[phase]);
  const [clickedCards, setClickedCards] = useState<Array<string>>([]);

  const isElementClicked = (elementID: string | null): boolean => (
    (elementID !== null && clickedCards.includes(elementID))
  );

  const handleClick = (event: SyntheticEvent): void => {
    const element: string | null = (event.target as Element).getAttribute('datatype');
    //  :if clickedCard id is within the array of clickedCards
    if (isElementClicked(element)) {
      console.log('Hi');
      //   :reset display
      //   :reset currentScore
      //   early return
      // else:
    } else {
      //   :setClickedCards array to add this new card's id
      //   it will shuffle automatically since setState rerenders
      const id: string = element!;
      setClickedCards((prevClickedCards): string[] => (
        [...prevClickedCards, id]
      ));
      //   :compare the card array length with the clickedCards array length

      //     :if length is equal
      //       :increment the phase variable
      //       :use next card array on display and shuffle

      //   :if currentScore is > bestScore
      //     :update bestScore
      //   :update currentScore
    }
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
