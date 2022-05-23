import React from 'react';

interface Props {
  score: number;
  bestScore: number;
}

function Score(props: Props) {
  const { score, bestScore } = props;

  return (
    <main className="score-container">
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

    </main>
  );
}

export default Score;
