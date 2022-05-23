import React from 'react';

interface Props {
  restartGame : () => void;
}

function VictoryView(props: Props) {
  const { restartGame } = props;
  return (
    <>
      <h1
        className="victory-title"
      >
        {' '}
        YOU ARE A MASTER PROGRAMMER!
      </h1>
      <button
        type="button"
        className="reset-game"
        onClick={restartGame}
      >
        {' '}
        PLAY AGAIN
      </button>
    </>
  );
}

export default VictoryView;
