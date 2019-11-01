import React from 'react';
import ReactDom from 'react-dom'; // Renderer
import App from './components/App';
// The real way to scale CSS is to stop writing CSS
// An overwhelming mojority of CSS you would need for your site has already been written.
// PostCSS is a tool for transforming styles with JS plugins.
import './styles/index.css';

// Mount the component into the browser
const MOUNT_ELEMENT = document.getElementById('root');
// Execute render method -> mounter function
ReactDom.render(<App />, MOUNT_ELEMENT);
