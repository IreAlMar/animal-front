import React from 'react';
import PropTypes from 'prop-types';
import AnimalListItem from './AnimalListItem';

const AnimalList = ({ 
  style,
  favorites,
  animals,
  ...props
}) => (
    <div style={style}>
      <h2 className="h2">Animals</h2>
      {/* get rid of the dots in a list */}
      <ul className="list-reset">
        {animals.map(animal => (
          <AnimalListItem
            key={animal.taxonid}
            animal={animal}
            favorited={favorites.includes(animal.taxonid)}
            {...props}
          />
        ))}
      </ul>
    </div>
  );

AnimalList.propTypes = {
  animals: PropTypes.array,
  style: PropTypes.object,
  favorites: PropTypes.array,
};

export default AnimalList;
