import React from 'react';

interface Props {
  score: number;
  bestScore: number;
}

function Score(props: Props) {
  const { score, bestScore } = props;

  return (
    <div className="score-container">
      <div className="score">
        Score:
        {' '}
        {score}
      </div>
      <div className="score">
        Best score:
        {' '}
        {bestScore}
      </div>

    </div>
  );
}

export default Score;
