import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount to start the app

const mount = (el) => {
 ReactDOM.render(<App/>,el);};

// In development and Isolation ,
//call mount Immediately

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

//We are running through the container,
//we should export the mount.

export {mount};