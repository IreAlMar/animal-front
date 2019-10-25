import React from 'react';

const RacoonDetail = (props) => (
    <div style={props.style}>
        <h2>Ms. Racoon</h2>
        <img src="https://www.animalfactsencyclopedia.com/images/raccoonportrait.jpg" alt="Racoon image" />
        <div>
            <span>Hijacker</span>
            <span>4 Kg</span>
        </div>
        <h3>Abilities</h3>
        <ul>
            <li>Inteligence</li>
            <li>Memory</li>
            <li>Nocturnity</li>
            <li>Dixterity</li>
        </ul>
        <h3>Description</h3>
        <ol>
            <li>Average body length: 84.1 cm</li>
            <li>Fur: pale and short</li>
            <li>Skull: angular</li>
        </ol>

    </div>
);

export default RacoonDetail;