import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const AnimalDetail = props => {
  const imageAddress = new Map([
    [
      'Brookesia lambertoni',
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Brookesia_desperata_male.jpg',
    ],
    [
      'Calumma fallax',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Short-nosed_deceptive_chameleon_%28Calumma_fallax%29_Ranomafana.jpg/1200px-Short-nosed_deceptive_chameleon_%28Calumma_fallax%29_Ranomafana.jpg',
    ],
    [
      'Calumma vatosoa',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Blue-nosed_Chameleon_%28Calumma_linotum%29_at_night_..._%2830325453937%29.jpg/1200px-Blue-nosed_Chameleon_%28Calumma_linotum%29_at_night_..._%2830325453937%29.jpg',
    ],
    [
      'Chamaeleo necasi',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Chamaeleo_zeylanicus.jpg',
    ],
    [
      'Furcifer tuzetae',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/FurciferPardalisMale.JPG',
    ],
    [
      'Kinyongia gyrolepis',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Horned_Chameleon_in_Lushoto%2C_Usambara_Mountains.jpg/1280px-Horned_Chameleon_in_Lushoto%2C_Usambara_Mountains.jpg',
    ],
    [
      'Trioceros kinetensis',
      'https://upload.wikimedia.org/wikipedia/commons/e/e7/Jackson%27s_Chameleon444.jpg',
    ],
    [
      'Trioceros ntunte',
      'https://alchetron.com/cdn/trioceros-c14b7397-c6d7-475c-9664-07ee41de1b3-resize-750.jpeg',
    ],
    [
      'Trioceros schoutedeni',
      'https://static.inaturalist.org/photos/185519/original.JPG?1349743914',
    ],
    [
      'Trioceros wiedersheimi',
      'https://static.inaturalist.org/photos/2794459/medium.jpg?1450613704',
    ],
  ]);

  if (!props.animal) {
    return (
      <p
        style={props.style}
        // bg-white -> white background color
        // p2 -> padding
        // if props.className is null you have a null classname there
        // className={`h3 p2 bg-white italic center ${props.className}`}
        // className="h3 p2 bg-white italic center + props.className"
        // -> use classnames library to handle this situations
        className={classNames('h3 p2 bg-white italic center', props.className)}
      >
        Please select an animal to see the detail.
      </p>
    );
  }

  return (
    // Handle the zero state of the component
    <div
      style={props.style}
      className={classNames('p2 bg-white', props.className)}
    >
      <h2 className="h2">{props.animal.name}</h2>
      <img
        className="fit" // make the image fit in the parent width
        src={imageAddress.get(props.animal.name)}
        alt="Chamaleon"
      />

      {props.animal.result[0] && (
        <div>
          <h3>Description</h3>
          <span>{props.animal.result[0].taxonomicnotes}</span>
          <h3>Habitat</h3>
          <span>{props.animal.result[0].habitat}</span>
          <h3>Threats</h3>
          <span>{props.animal.result[0].threats}</span>
          <h3>Conservation measures</h3>
          <span>{props.animal.result[0].conservationmeasures}</span>
        </div>
      )}
      {/* Redirect the user to a given path */}
      <Link
        to={`/animal/${props.animal.name}`}
      >
        See more
      </Link>
    </div>
  );
};

AnimalDetail.propTypes = {
  animal: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AnimalDetail;
