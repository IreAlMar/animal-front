import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';

const App = () => (
    <div>
        <Header />
        <BrowserRouter>
            {/* 'BrowserRouter' only accepts one child -> wrap routes */}
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
            </main>
        </BrowserRouter>
    </div>
);

export default App;