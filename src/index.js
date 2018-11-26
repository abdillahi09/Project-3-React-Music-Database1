import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS

import Home from './components/home';
import Artist from './components/artist';
import Login from './components/login';

// Renders components to id root at index.html 

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/artist/:artistid" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
