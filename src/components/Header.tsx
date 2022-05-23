import React from 'react';
import Title from './Title';
import PhaseName from './PhaseName';
import Score from './Score';

interface Props {
  score: number;
  phase: number;
  bestScore: number;
}

function Header(props: Props) {
  const { score, phase, bestScore } = props;
  return (
    <header className="header-container">
      <Title />
      <PhaseName
        phase={phase}
      />
      <Score
        score={score}
        bestScore={bestScore}
      />
    </header>
  );
}

export default Header;
