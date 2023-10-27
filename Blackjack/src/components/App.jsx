import { useState } from 'react'; // remembers states of components
import GameTable from './GameTable/GameTable.jsx';
import Header from './Header/Header.jsx';

export default function Game() {
  return (
    <section id="main" className="main-section main">
      <Header />
      <GameTable />
    </section>
  );
}
