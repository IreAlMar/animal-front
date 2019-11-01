import React from 'react';
import PropTypes from 'prop-types';

const AnimalList = (props) => (
    <div style={props.style}>
        <h2 className="h2">Animals</h2>
         <ul className="list-reset">
         {/* get rid of the dots in a list */}
            {props.animals.map((animal) => (
                <li
                    className="py2 border-bottom border-bottom-dashed pointer"
                    key={animal.taxonid}
                    onClick={() => props.onClick(animal.scientific_name)}
                >
                    <span>{animal.scientific_name}</span>
                    <span>{animal.category}</span>
                </li>
            ))}
        </ul>
    </div>
);

AnimalList.propTypes = {
    animals: PropTypes.object,
    style: PropTypes.object,
};

export default AnimalList;
