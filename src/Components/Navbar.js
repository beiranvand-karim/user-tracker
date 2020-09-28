import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavBar() {

    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <AppBar style={{backgroundColor:"#222"}} position="static">
                    <TabList onChange={handleChange}>
                        <Tab label="Users" value="1" />
                        <Tab label="Products" value="2" />
                        <Tab label="Manufacturers" value="3" />
                    </TabList>
                </AppBar>
            </TabContext>
        </div>
    );
}