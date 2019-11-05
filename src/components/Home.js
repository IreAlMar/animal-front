import React from 'react';
import PropTypes from 'prop-types';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';

// Data is read only and comes from outside the component
// State is data defined in the component and changes during the component life cycle
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAnimal: null,
    };

    // this.onAnimalClick = this.onAnimalClick.bind(this);
  }

  onAnimalClick = name => {
    fetch(`${API_URL}/species/narrative/${name}?token=${token}`)
      .then(res => res.json())
      .then(animal => {
        this.setState({ currentAnimal: animal });
      });
  };
  /* The scope of a function depends on where the function is being called
     onAnimalClick is being called not in the App class but in the AnimalList component
     -> explicitly bind the function into the scope of the class, two options:
     A) in the constructor: this.onAnimalClick = this.onAnimalClick.bind(this);
     B) Nicer way: define the onAnimalClick as an arrow function
     -> install babel preset babel-preset-stage-0
    */

  // Class function


  render() {
    const { animals, favorites } = this.props.state;
    const { currentAnimal } = this.state;

    return (
      // State is inizialized in the constructor
      <div>
        {/* px4 -> apply padding x-> to the right and left (not to the top and bottom) */}
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Animals</h2>
            <AnimalList
              animals={animals}
              favorites={favorites}
              // get onAnimalClick callback from the this as this is a class method
              onClick={this.onAnimalClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          <AnimalDetail
            className="ml4"
            style={{ flex: 5 }}
            animal={currentAnimal}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

// Props are just read only! -> Good practice not to edit them inside the component.

export default Home;
