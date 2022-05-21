import React, { FC } from 'react';
import { GeneralProps } from '../types/types';

interface Props {
  cards: object;
  handleClick: () => void;
  test: string;
}

function CardsContainer(props: Props) {
  const shuffleCards = () => {
    console.log("hi");
    //
    //
  };
  return (
    <main className="App">
      allo
    </main>
  );
};

export default CardsContainer;
