import React from 'react';
import PropTypes from 'prop-types';

const AnimalListItem = ({
  animal,
  favorited,
  onClick,
  onFavorited,
}) => (

    <li
      className="py2 border-bottom border-bottom-dashed pointer"
      // key={animal.taxonid}
      onClick={() => onClick(animal.scientific_name)}
    >
      <span
        className="mr1"
        onClick={e => {
          // To rpevent the animal to be shown when box clicked
          e.stopPropagation();
          onFavorited(animal.taxonid)
        }}
        role="img"
        aria-label="favorite"
      >
        {favorited ? '✅' : '☐'}
      </span>
      <span>{animal.scientific_name}</span>
      <span>{animal.category}</span>
    </li>
  );

AnimalListItem.propTypes = {
  animal: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

export default AnimalListItem;