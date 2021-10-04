/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
function App() {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
   const [query, setQuery] = useState([]);
   useEffect(() => {
   const loadQueries = async () => {
       const response = await axios.get('https://localhost:3035/data');
       console.log(response.data.data);
       setQuery(response.data.data)}
       loadQueries()}, [])


        return (
            <div className="App">
                <Menu />
                <Home />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
