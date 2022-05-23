/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent } from 'react';
import Card from './Card';

interface Props {
  cards: object;
  handleClick: (arg: SyntheticEvent) => void;
  shuffleCards: (arg: object) => object[];
}

function CardsContainer(props: Props) {
  const {
    cards, handleClick, shuffleCards,
  } = props;

  const renderCards = () => {
    const shuffledCards: object = shuffleCards(cards);

    return Object.values(shuffledCards).map((card) => (
      <Card
        key={card.id}
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
