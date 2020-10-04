import React from 'react';
import NavBar from "./Components/Navbar";
import {StylesProvider} from "@material-ui/core/styles";
import UsersList from "./Components/usersList";

function App() {
    return (
        <StylesProvider injectFirst>
            <NavBar/>
            <UsersList/>
        </StylesProvider>
    );
}

export default App;
