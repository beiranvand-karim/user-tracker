import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
        background : #222;
    `;

const Div = styled('div')`
        flex-grow: 1;
`

export default function NavBar() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Div>
            <TabContext value={value}>
                <StyledAppBar position="static">
                    <TabList onChange={handleChange}>
                        <Tab label="Users" value="1"/>
                        <Tab label="Products" value="2"/>
                        <Tab label="Manufacturers" value="3"/>
                    </TabList>
                </StyledAppBar>
            </TabContext>
        </Div>
    );
}