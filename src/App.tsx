/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent, useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import data from './data/data';

function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);
  const [cards, setCards] = useState<object>(data[phase]);
  const [clickedCardsIDs, setClickedCards] = useState<Array<string>>([]);

  const isElementClicked = (elementID: string | null): boolean => (
    elementID !== null && clickedCardsIDs.includes(elementID)
  );

  const isBestEqualsToCurrent = (): boolean => score >= bestScore;

  const isAllCardsClicked = ():boolean => (
    clickedCardsIDs.length >= Object.values(cards).length
  );

  const updateScore = () => {
    setScore((prevScore): number => prevScore + 1);
    if (isBestEqualsToCurrent()) {
      setBestScore((prevBestScore): number => prevBestScore + 1);
    }
  };

  const resetScore = (): void => {
    setScore(0);
  };

  const resetClickedCards = ():void => {
    setClickedCards((prevClickedCards): string[] => {
      const newArray = prevClickedCards;
      newArray.length = 0;
      return newArray;
    });
  };

  const handleClick = (event: SyntheticEvent): void => {
    const element: string | null = (event.target as Element).getAttribute('datatype');

    if (isElementClicked(element)) {
      resetScore();
      resetClickedCards();
      //   :reset display
      //   early return
      return;
    }
    const id: string = element!;

    updateScore();

    setClickedCards((prevClickedCards): string[] => (
      [...prevClickedCards, id]
    ));

    if (isAllCardsClicked()) {
      setPhase((prevPhase): number => prevPhase + 1);
      console.log(phase);
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

  return (
    <main className="general-container">
      <Header
        score={score}
        bestScore={bestScore}
      />
      <CardsContainer
        cards={cards}
        handleClick={handleClick}
        shuffleCards={shuffleCards}
      />
    </main>
  );
}

export default App;
