import React from 'react';

import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

function App() {
    return (
        <Switch>
        <div>
            <Header/>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
        </div>
        </Switch>
    );
}

export default App;
