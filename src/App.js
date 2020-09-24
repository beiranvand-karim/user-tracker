import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import './App.css'


function App () {

        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Route path="/products" component={Products}/>
                </div>
            </BrowserRouter>
        );
}

export default App;
