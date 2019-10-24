import React from 'react';
import ReactDom from 'react-dom'; // Renderer
import App from './App';

// Mount the component into the browser
const MOUNT_ELEMENT = document.getElementById('root');
// Execute render method -> mounter function
ReactDom.render(<App />, MOUNT_ELEMENT);
