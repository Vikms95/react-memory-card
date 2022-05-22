/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface Props {
  cards: object;
  handleClick: () => void;
}

function CardsContainer(props: Props) {
  const shuffleCards = () => {
    console.log(props);
  };
  return (
    <main className="cards-container">
      allo
    </main>
  );
}

export default CardsContainer;
