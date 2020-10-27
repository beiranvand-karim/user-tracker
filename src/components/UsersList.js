import React, { useState } from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Checkbox } from "@material-ui/core"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

const TableHeadCellStyled = styled(TableCell)`
	background: #ced2aa;
	font-size: large;
`

const TableBodyCellStyled = styled(TableCell)`
	font-size: 14px;
`

const TableContainerStyled = styled(TableContainer)`
	margin-top: 100px;
	margin-left: 200px;
	margin-right: 200px;
`

const TableStyled = styled(Table)`
	min-width: 100px;
	margin-top: 10px;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export default function UsersList() {
	const users = useSelector((users) => users)
	const [checkedUsers, setCheckedUsers] = useState(null)
	const dispatch = useDispatch()

	const handleChange = (e, userId) => {
		if (checkedUsers == null) {
			setCheckedUsers([userId])
		} else {
			if (existUserById(userId)) {
				const users = checkedUsers.filter((id) => {
					return id !== userId
				})
				setCheckedUsers(users)
			} else {
				setCheckedUsers([...checkedUsers, userId])
			}
		}
	}

	const existUserById = (userId) => {
		if (
			checkedUsers.find((id) => {
				if (id === userId) return true
			})
		) {
			return true
		} else {
			return false
		}
	}

	const deleteUser = () => {
		for (const checked of checkedUsers) {
			dispatch({ type: "DELETE-USER", payload: checked })
		}
		setCheckedUsers(null)
	}
	return (
		<Container>
			<TableContainerStyled component={Paper}>
				<TableStyled aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableHeadCellStyled>Name</TableHeadCellStyled>
							<TableHeadCellStyled>Email</TableHeadCellStyled>
							<TableHeadCellStyled>Date Created</TableHeadCellStyled>
							<TableHeadCellStyled>Date Modified</TableHeadCellStyled>
							<TableHeadCellStyled>
								<Button disabled={!checkedUsers} onClick={() => deleteUser()}>
									<DeleteIcon />
								</Button>
							</TableHeadCellStyled>
						</TableRow>
					</TableHead>
					{users &&
						users.map((user) => (
							<TableBody key={user.id}>
								<TableRow>
									<TableBodyCellStyled component="th" scope="row">
										<Checkbox
											onClick={(e) => handleChange(e, user.id)}
											color="default"
										/>
										{user.firstName + " "}
										{user.lastName}
									</TableBodyCellStyled>
									<TableBodyCellStyled>{user.emailAddress}</TableBodyCellStyled>
									<TableBodyCellStyled>{user.dateCreated}</TableBodyCellStyled>
									<TableBodyCellStyled>{user.dateModified}</TableBodyCellStyled>
								</TableRow>
							</TableBody>
						))}
				</TableStyled>
			</TableContainerStyled>
		</Container>
	)
}
