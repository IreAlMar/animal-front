import React from 'react';
import PropTypes from 'prop-types';
import AnimalListItem from './AnimalListItem';

const AnimalList = ({
  style,
  favorites,
  animals,
  ...props
}) => (
  <ul className="list-reset" style={style}>
    {animals.map(animal => (
      <AnimalListItem
        key={animal.taxonid}
        animal={animal}
        favorited={favorites.includes(animal.taxonid)}
        {...props}
      />
    ))}
  </ul>
);

AnimalList.propTypes = {
  animals: PropTypes.array,
  style: PropTypes.object,
  favorites: PropTypes.array,
};

export default AnimalList;
