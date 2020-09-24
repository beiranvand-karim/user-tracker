import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        }
    },
    button: {
        margin: theme.spacing(1),
    }
}));

function Add(props) {

    const classes = useStyles();

    const [inputFields, setInputField] = useState([
        {
            firstName: '',
            lastName: '',
            Email: '',
            DateCreated: '',
        }
    ])


    const cancel = (e) => {

        e.preventDefault();
        const i = inputFields.length - 1;
        const values = [...inputFields];
        values.splice(i, 1);
        setInputField(values);


        alert('please click on the cancel again');


        if (inputFields.length <= 1) {
            setInputField([...values, {
                firstName: '',
                lastName: '',
                Email: '',
                DateCreated: '',
            }
            ])
        }
    }

    const handleChange = (event) => {

        let i = 0;

        if (inputFields.length > 1) {
            i = inputFields.length - 1;
        } else {
            i = 0;
        }
        const values = [...inputFields];

        values[i][event.target.name] = event.target.value;
        values[i]["DateCreated"] = new Date().toDateString();
        setInputField(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = [...inputFields];
        if (values[inputFields.length - 1].firstName === '') {
            return alert('please enter your name correct');
        } else {
            setInputField([...values, {
                firstName: '',
                lastName: '',
                Email: '',
                DateCreated: '',
            }])
            props.add(values);
        }
    }

    return (
        <Container>
            <form className={classes.root}>
                <div>
                    <div>
                        <TextField name="firstName" variant="standard" label="First Name"
                                   onChange={event => handleChange(event)}/>
                    </div>
                    <div>
                        <TextField name="lastName" variant="standard" label="Last Name"
                                   onChange={event => handleChange(event)}/>
                    </div>
                    <div>
                        <TextField name="Email" variant="standard" label="Email"
                                   onChange={event => handleChange(event)}/>
                    </div>
                    <Button onClick={handleSubmit} className={classes.button} variant="contained" color="primary"
                            type="submit">submit</Button>
                    <Button onClick={cancel} className={classes.button} variant="contained"
                            color="secondary" type="button">cancel</Button>

                </div>
            </form>

        </Container>
    );
}

export default Add