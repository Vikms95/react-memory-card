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

  const renderCards = () => (
    Object.values(cards).map((card) => (
      <Card
        handleClick={handleClick}
        cardData={card}
      />
    )));

  const shuffleCards = ():void => {
    console.log(props);
  };

  return (
    <main className="cards-container">
      {renderCards()}
    </main>
  );
}

export default CardsContainer;
