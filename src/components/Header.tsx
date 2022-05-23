import React from 'react';
import Title from './Title';
import Score from './Score';

interface Props {
  score: number;
  bestScore: number;
}

function Header(props: Props) {
  const { score, bestScore } = props;
  return (
    <header className="header-container">
      <Title />
      <Score
        score={score}
        bestScore={bestScore}
      />
    </header>
  );
}

export default Header;
