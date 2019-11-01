import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';

const App = () => (
    <div>
        <Header />
        <BrowserRouter>
            {/* 'BrowserRouter' only accepts one child -> wrap routes 
        order matters here*/}
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </BrowserRouter>
    </div>
);

export default App;