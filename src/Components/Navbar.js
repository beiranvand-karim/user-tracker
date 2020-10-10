import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import styled from 'styled-components';
import TabPanel from "@material-ui/lab/TabPanel";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const AppBarStyled = styled(AppBar)`
        background : #222;
    `;

const TabContextStyled = styled(TabContext)`
        flex-grow: 1;
`;

const FabStyled = styled(Fab)`
    position: absolute;
    right: 16px;
    bottom: 16px;
`;

export default function NavBar() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContextStyled value={value}>
            <AppBarStyled position="static">
                <TabList onChange={handleChange}>
                    <Tab label="Users" value="1"/>
                    <Tab label="Products" value="2"/>
                    <Tab label="Manufacturers" value="3"/>
                </TabList>
            </AppBarStyled>
            <TabPanel value="1">
                <FabStyled color="primary">
                    <AddIcon/>
                </FabStyled>
            </TabPanel>
        </TabContextStyled>
    );
}
