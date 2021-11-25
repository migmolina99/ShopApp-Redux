import React from 'react';
import './App.css';
import cod4 from './assets/img/cod4.jpeg';
import BuyGame from './components/BuyGame';
import GameQuantity from './components/GameQuantity';
import PokemonFinder from './components/PokemonFinder';
import PokemonResult from './components/PokemonResult';

function App() {
  return (
    <div className="container">
      <article className="product-card">
        <div className="product-card__image">
          <img src={cod4} alt="" className="product-card__picture" />
        </div>
        <div className="product-card__info">
          <GameQuantity />
          <BuyGame />
        </div>
      </article>
      <PokemonFinder />
      <PokemonResult />
    </div>
  );
}

export default App;
