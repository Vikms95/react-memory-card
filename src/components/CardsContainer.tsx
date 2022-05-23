/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent } from 'react';
import Card from './Card';

interface Props {
  cards: Array<object>;
  phase: number;
  handleClick: (arg: SyntheticEvent) => void;
  shuffleCards: (arg: object) => object[];
}

function CardsContainer(props: Props) {
  const {
    cards, phase, handleClick, shuffleCards,
  } = props;

  const renderCards = () => {
    const phaseCards = cards[phase];
    const shuffledCards: object = shuffleCards(phaseCards);

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
