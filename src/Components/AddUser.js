import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import {InputLabel} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";

const ContainerStyled = styled(Container)`
    flex-grow: 1;
    background: #f5f5f5;
`;

const TextFieldStyled = styled(TextField)`
    background: #FEFEFE;
    margin :30px;
    width: 80%;
`;

const InputLabelStyled = styled(InputLabel)`
    text-align: left;
    margin-left: 125px;
`;

const ContainerButton = styled.div`
    display : flex;
    justify-content: space-between;
    margin-top:40px;
`;

function AddUser({addUser}) {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateCreated: '',
    });

    const cancel = (e) => {
        e.preventDefault();
        setUser({
            firstName: '',
            lastName: '',
            emailAddress: '',
            dateCreated: '',
        });
    }

    const handleChange = (event) => {
        setUser({
                ...user,
                [event.target.name]: event.target.value,
                dateCreated: new Date().toLocaleTimeString(),
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) return;
        // addUser(user);
        setUser({
            firstName: '',
            lastName: '',
            emailAddress: '',
            dateCreated: '',
        });
    }
    const handleEmptyError = () => {
        if ((user.firstName.length <= 2) || (user.lastName.length <= 2) || (user.emailAddress.length <= 10)) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <ContainerStyled>
            <FormGroup>
                Add User
                <div>
                    <InputLabelStyled>First name</InputLabelStyled>
                    <TextFieldStyled value={user.firstName} variant="outlined" name="firstName"
                                     onChange={event => handleChange(event)}/>
                </div>
                <div>
                    <InputLabelStyled>Last name</InputLabelStyled>
                    <TextFieldStyled value={user.lastName} variant="outlined" name="lastName"
                                     onChange={event => handleChange(event)}/>
                </div>
                <div>
                    <InputLabelStyled>Email</InputLabelStyled>
                    <TextFieldStyled value={user.emailAddress} variant="outlined"
                                     name="emailAddress"
                                     onChange={event => handleChange(event)}/>
                </div>
                <ContainerButton>
                    <Button disabled={handleEmptyError() === false} onClick={handleSubmit}
                            variant="contained" color="primary"
                            type="submit">submit</Button>
                    <Button onClick={cancel} variant="contained"
                            color="secondary">cancel</Button>
                </ContainerButton>
            </FormGroup>
        </ContainerStyled>
    )
}

export default AddUser;