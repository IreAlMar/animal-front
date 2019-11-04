import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';

const App = () => (
    <div>
        <BrowserRouter>
            {/* 'BrowserRouter' only accepts one child -> wrap routes 
        order matters here*/}
            <main>
                {/* Important! Use of Link or NavLink from other components must be inside BrowserRouter */}
                <Header />
                <Switch>
                    <Redirect from="/home" to="/" />
                    <Route exact path="/" component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </BrowserRouter>
    </div>
);

export default App;