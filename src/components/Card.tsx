/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SyntheticEvent } from 'react';

interface Props {
  cardData:{
    id: string;
    name: string;
    photo: string;
  }
  handleClick: (arg: SyntheticEvent) => void;
}

function Card({ cardData, handleClick }: Props) {
  const { id, name, photo } = cardData;
  return (
    <button
      type="button"
      className="card"
      datatype={id}
      onClick={handleClick}
    >
      {name}
      <img
        src={photo}
        alt="card"
        datatype={id}
        className="card-image"
      />
    </button>
  );
}

export default Card;
