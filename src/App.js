import React from 'react';
import Logo from './static/images/racoon-logo.png'

// Class component
// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello World</h1>
//         );
//     }
// }

// Functional component
const App = () => (
    <div>
        <h1>Welcome to Ms. Racoon site</h1>
        <img src={Logo} alt="racoon logo" />
        <p>Hey there! I am using React!</p>
    </div>
);

// Props are just read only! -> Good practice not to edit them inside the component.

export default App;