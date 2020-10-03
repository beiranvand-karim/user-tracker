import React from 'react';
import NavBar from "./Components/Navbar";
import {StylesProvider} from "@material-ui/core/styles";
import Tables from "./Components/table";
function App() {
    return (
        <div className="App">
            <StylesProvider injectFirst>
                <NavBar/>
                <Tables/>
            </StylesProvider>
        </div>
    );
}

export default App;
