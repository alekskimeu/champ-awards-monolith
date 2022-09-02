import React from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import styled from "styled-components";

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
	return (
		<Dialog open={confirmDialog.isOpen}>
			<DialogTitle></DialogTitle>
			<DialogContent>
				<Title>{confirmDialog.title}</Title>
				<subTitle>{confirmDialog.subtitle}</subTitle>
			</DialogContent>
			<DialogActions>
				<Button>{confirmDialog.buttonText}</Button>
			</DialogActions>
		</Dialog>
	);
};

const Button = styled.button`
    
`

export default ConfirmDialog;
