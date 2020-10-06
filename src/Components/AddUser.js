import React, {Component} from 'react';
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

class AddUser extends Component {

    constructor(props) {
        super(props);
    }

    state = ({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateCreated: '',
    });


    cancel = (e) => {
        e.preventDefault();
        console.log(this.state.length);
        this.state.firstName = '';
        this.state.lastName = '';
        this.state.emailAddress = '';
        this.state.dateCreated = '';
        console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value,
                dateCreated: new Date().toLocaleTimeString(),
            }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.handleEmptyError());
        this.props.add(this.state);

    }

    handleEmptyError = () => {
        if (this.state.firstName.length <= 3) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <ContainerStyled>
                <FormGroup>
                    Add User
                    <div>
                        <InputLabelStyled>First name</InputLabelStyled>
                        <TextFieldStyled variant="outlined" name="firstName"
                                         onChange={event => this.handleChange(event)}/>
                    </div>
                    <div>
                        <InputLabelStyled>Last name</InputLabelStyled>
                        <TextFieldStyled variant="outlined" name="lastName"
                                         onChange={event => this.handleChange(event)}/>
                    </div>
                    <div>
                        <InputLabelStyled>Email</InputLabelStyled>
                        <TextFieldStyled variant="outlined"
                                         name="emailAddress"
                                         onChange={event => this.handleChange(event)}/>
                    </div>
                    <ContainerButton>
                        <Button disabled={this.handleEmptyError() == false} onClick={this.handleSubmit}
                                variant="contained" color="primary"
                                type="submit">submit</Button>
                        <Button onClick={this.cancel} variant="contained"
                                color="secondary">cancel</Button>
                    </ContainerButton>
                </FormGroup>
            </ContainerStyled>
        )
    }
}

export default AddUser;