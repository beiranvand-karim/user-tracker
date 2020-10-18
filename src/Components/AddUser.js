import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { InputLabel } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'

const ContainerStyled = styled(Container)`
	flex-grow: 1;
	background: #f5f5f5;
`

const TextFieldStyled = styled(TextField)`
	background: #fefefe;
	margin: 30px;
	width: 80%;
`

const InputLabelStyled = styled(InputLabel)`
	position: absolute;
	left: 70px;
`

const ContainerButton = styled.div`
	display: flex;
	justify-content: space-between;
`

const FormGroupStyled = styled(FormGroup)`
	padding: 15px;
`

function AddUser({ handleCancel, setUsers }) {
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [emailAddress, setEmailAddress] = useState(null)
	const [dateCreated, setDateCreated] = useState(null)

	const clearUserInputs = () => {
		setFirstName(null)
		setLastName(null)
		setEmailAddress(null)
		setDateCreated(null)
	}

	const cancel = () => {
		clearUserInputs()
		handleCancel()
	}

	const nullToEmpty = (value) => value || String()

	const handleSubmit = () => {
		const user = {
			firstName: nullToEmpty(firstName),
			lastName: nullToEmpty(lastName),
			emailAddress: nullToEmpty(emailAddress),
			dateCreated: nullToEmpty(dateCreated),
		}
		setUsers((users) => {
			if (!users) return [user]
			return [...users, user]
		})
		clearUserInputs()
		handleCancel()
	}

	return (
		<ContainerStyled>
			<FormGroupStyled>
				<div>
					<InputLabelStyled>First name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(firstName)}
						variant='outlined'
						name='firstName'
						onChange={({ target: { value } }) => setFirstName(value)}
					/>
				</div>
				<div>
					<InputLabelStyled>Last name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(lastName)}
						variant='outlined'
						name='lastName'
						onChange={({ target: { value } }) => setLastName(value)}
					/>
				</div>
				<div>
					<InputLabelStyled>Email</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(emailAddress)}
						variant='outlined'
						name='emailAddress'
						onChange={({ target: { value } }) => setEmailAddress(value)}
					/>
				</div>
				<ContainerButton>
					<Button
						onClick={handleSubmit}
						variant='contained'
						color='primary'
						type='submit'
					>
						Add
					</Button>
					<Button onClick={cancel} variant='contained' color='secondary'>
						Close
					</Button>
				</ContainerButton>
			</FormGroupStyled>
		</ContainerStyled>
	)
}

export default AddUser
