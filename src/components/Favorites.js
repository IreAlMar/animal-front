import React from 'react';
import AnimalList from './AnimalList';

const Favorites = ({ state, toggleFavorite }) => (
  <div>
    <h2 className="px4 h2">Favorites</h2>
    <AnimalList
      animals={state.animals.filter(r => state.favorites.includes(r.taxonid))}
      favorites={state.favorites}
      onFavorited={toggleFavorite}
    />
  </div>
);

export default Favorites;
