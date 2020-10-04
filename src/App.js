import React from 'react';
import NavBar from "./Components/Navbar";
import {StylesProvider} from "@material-ui/core/styles";
import ListOfUsers from "./Components/table";

function App() {
    return (
        <div className="App">
            <StylesProvider injectFirst>
                <NavBar/>
                <ListOfUsers/>
            </StylesProvider>
        </div>
    );
}

export default App;
