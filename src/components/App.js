import React from 'react';
import Header from './Header';
import RacoonList from './RacoonList';
import RacoonDetail from './RacoonDetail';

const App = () => (
    <div>
        <Header />
        <main style={{ display: 'flex' }}>
            <RacoonList style={{ flex: 3 }} />
            <RacoonDetail style={{ flex: 5 }} />
        </main>
    </div>
);

// Props are just read only! -> Good practice not to edit them inside the component.

export default App;