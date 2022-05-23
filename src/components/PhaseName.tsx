import React from 'react';

interface Props {
  phase:number;
}

function PhaseName(props: Props) {
  const { phase } = props;
  const getPhaseName = ():string => {
    const PHASE_NAMES = {
      0: 'Languages',
      1: 'Languages 2',
      2: 'Frontend Frameworks',
      3: 'Backend Frameworks',
      4: 'Databases',
      5: 'Data Structures',
      6: 'Design Patterns',
    };
    return Object.values(PHASE_NAMES)[phase];
  };
  return (
    <h3 className="phase-container">
      {getPhaseName()}
    </h3>
  );
}

export default PhaseName;
