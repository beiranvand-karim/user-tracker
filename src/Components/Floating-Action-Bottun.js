import React from "react";
import styled from 'styled-components'
import Fab from "@material-ui/core/Fab";

const Container = styled.div`
    display : flex;
    margin-top : 70vh;
    background: #CED2AA;  
`;

const FabStyled = styled(Fab)`
    margin-left : 80%;
`;

export default function FloatButton() {

    return (
        <Container className="float">
            <FabStyled color="primary" variant="extended">Add User</FabStyled>
        </Container>
    )

}