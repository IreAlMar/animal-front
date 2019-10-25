import React from 'react';

const RacoonList = (props) => (
    <div style={props.style}>
        <h2>Sort of Racoons</h2>
        <ul>
            <li>
                <span>Ms. Racoon</span>
                <span>Hijacker</span>
            </li>
            <li>
                <span>Craby</span>
                <span>Housebreaker</span>
            </li>
            <li>
                <span>Silver</span>
                <span>Pirate</span>
            </li>
        </ul>
    </div>
);

export default RacoonList;