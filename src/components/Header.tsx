import React from 'react';
import Title from './Title';
import Score from './Score';

function Header() {
  return (
    <header className="header-container">
      <Title />
      <Score />
    </header>
  );
}

export default Header;
