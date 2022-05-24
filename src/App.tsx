/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { SyntheticEvent, useEffect, useState } from 'react';
import './styles/App.css';
import data from './data/data';
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';
import VictoryView from './components/VictoryView';

function App() {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);
  const [cards, setCards] = useState<Array<object>>(data);
  const [clickedCardsIDs, setClickedCards] = useState<Array<string>>([]);
  const [gameWin, setGameWin] = useState<boolean>(false);

  useEffect(() => {
    if (isGameWon()) {
      setGameWin(true);
    }

    if (isAllCardsClicked()) {
      setPhase((prevPhase): number => prevPhase + 1);
      setCards((prevCards) => prevCards);
      resetClickedCards();
    }

    if (isBestEqualsToCurrent()) {
      setBestScore((prevBestScore): number => prevBestScore + 1);
    }
  }, [score]);

  const handleClick = (event: SyntheticEvent): void => {
    const element: string | null = (event.target as Element).getAttribute('datatype');
    if (isElementClicked(element)) {
      resetGame();
      return;
    }

    updateScore();
    updateClickedCards(element);
  };

  const updateScore = (): void => {
    setScore((prevScore): number => prevScore + 1);
  };

  const updateClickedCards = (element: string | null): void => {
    const id: string = element!;

    setClickedCards((prevClickedCards): string[] => (
      [...prevClickedCards, id]
    ));
  };

  const shuffleCards = (sortedCards: object): object[] => (
    Object.values(sortedCards).sort(() => (
      Math.random() - 0.5
    ))
  );

  const resetClickedCards = (): void => {
    setClickedCards((prevClickedCards): string[] => {
      const newArray = prevClickedCards;
      newArray.length = 0;
      return newArray;
    });
  };

  const resetScore = (): void => {
    setScore(0);
  };

  const resetGame = (): void => {
    resetScore();
    resetClickedCards();
    setPhase(0);
  };

  const restartGame = (): void => {
    setGameWin(false);
  };

  const isBestEqualsToCurrent = (): boolean => score > bestScore;

  const isElementClicked = (elementID: string | null): boolean => (
    elementID !== null && clickedCardsIDs.includes(elementID)
  );

  const isAllCardsClicked = (): boolean => (
    clickedCardsIDs.length > Object.values(cards).length
  );

  const isGameWon = (): boolean => (
    phase === 6 && isAllCardsClicked()
  );

  return (
    <main className="general-container">
      <Header
        score={score}
        phase={phase}
        bestScore={bestScore}
      />
      {gameWin
        ? (
          <VictoryView
            restartGame={restartGame}
          />
        )
        : (
          <CardsContainer
            cards={(() => cards[phase])()}
            handleClick={handleClick}
            shuffleCards={shuffleCards}
          />
        )}
    </main>
  );
}

export default App;
