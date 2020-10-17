import React, { useState } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Dialog from '@material-ui/core/Dialog'
import AddUser from './AddUser'
import AddIcon from '@material-ui/icons/Add'

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

export default function FabButton({ setUsers }) {
	const [showDialog, setShowDialog] = useState(false)

	return (
		<div>
			<FabStyled onClick={(e) => setShowDialog(true)} color='primary'>
				<AddIcon />
			</FabStyled>
			<Dialog open={showDialog}>
				<AddUser
					setUsers={setUsers}
					handleCancel={(e) => setShowDialog(false)}
				/>
			</Dialog>
		</div>
	)
}
