import React, { useState } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import AddUser from './AddUser'

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

export default function FloatButton() {
	const [showDialog, setShowDialog] = useState(false)

	const handleClose = () => {
		setShowDialog(false)
		return
	}

	const handleOpen = (e) => {
		e.preventDefault()
		setShowDialog(true)
		return
	}

	return (
		<div>
			<FabStyled onClick={handleOpen} color='primary' variant='extended'>
				Add user
			</FabStyled>
			<Dialog open={showDialog}>
				<AddUser handleCancel={handleClose} />
			</Dialog>
		</div>
	)
}
