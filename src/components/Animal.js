import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetail from './AnimalDetail';

class Animal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: null,
    };
  }

  componentDidMount() {
    const { scientificName } = this.props.match.params;

    fetch(`${API_URL}/species/narrative/${scientificName}?token=${token}`)
      .then(res => res.json())
      .then(animal => {
        this.setState({ animal });
      });
  }

  render() {
    const { animal } = this.state;
    return (
      <div className="px4">
        <AnimalDetail animal={animal} />
      </div>
    );
  }
}

Animal.propTypes = {
  match: PropTypes.object,
};

export default Animal;
