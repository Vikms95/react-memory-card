/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Card from './Card';

interface Props {
  cards: object;
  handleClick : () => void;
}

function CardsContainer(props: Props) {
  const { cards, handleClick } = props;

  const shuffleCards = (sortedCards: object): object[] => Object.values(sortedCards).sort(() => (
    Math.random() - 0.5
  ));

  const renderCards = () => {
    const shuffledCards : object = shuffleCards(cards);
    return Object.values(shuffledCards).map((card) => (
      <Card
        cardData={card}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <main className="cards-container">
      {renderCards()}
    </main>
  );
}

export default CardsContainer;
