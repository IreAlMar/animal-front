import React from 'react';

const AnimalList = (props) => (
    <div style={props.style}>
        <h2>Animals</h2>
        <ul>
            {props.animals.map(animal => (
                <li
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

export default AnimalList;