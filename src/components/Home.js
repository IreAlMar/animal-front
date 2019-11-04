import React from 'react';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';

// Data is read only and comes from outside the component
// State is data defined in the component and changes during the component life cycle
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      currentAnimal: null,
      favorites: [],
    };

    // this.onAnimalClick = this.onAnimalClick.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/comp-group/getspecies/chameleons?token=${token}`)
      .then(res => res.json())
      // .then(animals => {
      // this.setState({ animals });
      // Edit the state
      .then(json => {
        this.setState({
          animals: json.result.filter(animal => animal.category === 'DD'),
        });
      });
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
  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f.id !== id) };
      }

      return { ...state, favorites: [...favorites, id] };
    });
  }

  render() {
    const { animals, currentAnimal, favorites } = this.state;

    return (
      // State is inizialized in the constructor
      <div>
        {/* px4 -> apply padding x-> to the right and left (not to the top and bottom) */}
        <main className="px4 flex">
          <AnimalList
            animals={animals}
            favorites={favorites}
            style={{ flex: 3 }}
            // get onAnimalClick callback from the this as this is a class method
            onClick={this.onAnimalClick}
            onFavorited={this.toggleFavorite}
          />
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

// Props are just read only! -> Good practice not to edit them inside the component.

export default Home;
