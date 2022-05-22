/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface Props {
  cardData: {
    name: string;
    photo: string;
  }
  handleClick: () => void;
}

function Card({ cardData, handleClick }: Props) {
  const { name, photo } = cardData;
  return (
    <button
      type="button"
      className="card"
      onClick={handleClick}
    >
      {name}
      {photo}
    </button>
  );
}

export default Card;
