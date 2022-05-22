/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface Props {
  cardData:{
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
      <img
        src={photo}
        alt="card"
        className="card-image"
      />
    </button>
  );
}

export default Card;
