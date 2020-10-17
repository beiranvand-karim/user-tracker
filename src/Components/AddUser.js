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
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [dateCreated, setDateCreated] = useState('')

	const cancel = (e) => {
		e.preventDefault()
		setFirstName('')
		setLastName('')
		setEmailAddress('')
		setDateCreated('')
		handleCancel()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setUsers((users) => {
			if (!users) return [{ firstName, lastName, emailAddress, dateCreated }]
			return [...users, { firstName, lastName, emailAddress, dateCreated }]
		})
		setFirstName('')
		setLastName('')
		setEmailAddress('')
		setDateCreated('')
	}

	const handleEmptyError = () => {
		if (
			firstName.length <= 2 ||
			lastName.length <= 2 ||
			emailAddress.length <= 10
		) {
			return false
		} else {
			return true
		}
	}

	return (
		<ContainerStyled>
			<FormGroupStyled>
				Add User
				<div>
					<InputLabelStyled>First name</InputLabelStyled>
					<TextFieldStyled
						value={firstName}
						variant='outlined'
						name='firstName'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<InputLabelStyled>Last name</InputLabelStyled>
					<TextFieldStyled
						value={lastName}
						variant='outlined'
						name='lastName'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<InputLabelStyled>Email</InputLabelStyled>
					<TextFieldStyled
						value={emailAddress}
						variant='outlined'
						name='emailAddress'
						onChange={(e) => setEmailAddress(e.target.value)}
					/>
				</div>
				<ContainerButton>
					<Button
						disabled={handleEmptyError() === false}
						onClick={handleSubmit}
						variant='contained'
						color='primary'
						type='submit'
					>
						submit
					</Button>
					<Button onClick={cancel} variant='contained' color='secondary'>
						cancel
					</Button>
				</ContainerButton>
			</FormGroupStyled>
		</ContainerStyled>
	)
}

export default AddUser
