import React, { SyntheticEvent, useState } from 'react';
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

  const isBestEqualsToCurrent = (): boolean => score >= bestScore;

  const isElementClicked = (elementID: string | null): boolean => (
    elementID !== null && clickedCardsIDs.includes(elementID)
  );

  const isAllCardsClicked = (): boolean => (
    clickedCardsIDs.length >= Object.values(cards).length
  );

  const isGameWon = (): boolean => (
    phase === 6 && isAllCardsClicked()
  );

  const updateScore = (): void => {
    setScore((prevScore): number => prevScore + 1);
    if (isBestEqualsToCurrent()) {
      setBestScore((prevBestScore): number => prevBestScore + 1);
    }
  };

  const resetClickedCards = (): void => {
    setClickedCards((prevClickedCards): string[] => {
      const newArray = prevClickedCards;
      newArray.length = 0;
      return newArray;
    });
  };

  const updateClickedCards = (element: string | null): void => {
    const id: string = element!;

    setClickedCards((prevClickedCards): string[] => (
      [...prevClickedCards, id]
    ));

    if (isAllCardsClicked()) {
      if (isGameWon()) {
        setGameWin(true);
      }
      setPhase((prevPhase): number => prevPhase + 1);
      setCards((prevCards) => prevCards);
      resetClickedCards();
    }
  };

  const resetScore = (): void => {
    setScore(0);
  };

  const resetGame = (): void => {
    resetScore();
    resetClickedCards();
    setPhase(0);
  };

  const handleClick = (event: SyntheticEvent): void => {
    const element: string | null = (event.target as Element).getAttribute('datatype');
    if (isElementClicked(element)) {
      resetGame();
      return;
    }

    updateScore();
    updateClickedCards(element);
  };

  const shuffleCards = (sortedCards: object): object[] => (
    Object.values(sortedCards).sort(() => (
      Math.random() - 0.5
    ))
  );

  const restartGame = (): void => {
    setGameWin(false);
  };

  const getPhaseCards = (): object => cards[phase];

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
            cards={getPhaseCards()}
            handleClick={handleClick}
            shuffleCards={shuffleCards}
          />
        )}
    </main>
  );
}

export default App;
