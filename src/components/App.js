import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            favorites: [],
        }

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
                console.log(this.state.animals);
            });
    }

    toggleFavorite = id => {
        this.setState(({ favorites, ...state }) => {
            if (favorites.includes(id)) {
                return { ...state, favorites: favorites.filter(f => f !== id) };
            } else {
                return { ...state, favorites: [...favorites, id] };
            }
        });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    {/* 'BrowserRouter' only accepts one child -> wrap routes 
        order matters here*/}
                    <main>
                        {/* Important! Use of Link or NavLink from other components must be inside BrowserRouter */}
                        <Header />
                        <Switch>
                            <Redirect from="/home" to="/" />
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <Home
                                        state={this.state}
                                        toggleFavorite={this.toggleFavorite}
                                    />
                                )}
                            />
                            <Route
                                path="/favorites"
                                render={() => (
                                    <Favorites
                                        state={this.state}
                                        toggleFavorite={this.toggleFavorite}
                                    />
                                )}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;