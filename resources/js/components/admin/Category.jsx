import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import ConfirmDialog from "../ConfirmDialog";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";
import CategoryForm from "./CategoryForm.jsx";

const Category = ({ category }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	const handleDelete = () => {
        Inertia.delete(`/categories/${category.id}`);
    };

	return (
		<>
			<Container>
				<Name>{category.name}</Name>
				<Description>{category.description.slice(0, 80)}...</Description>
				<Action>
					<Button onClick={showModal}>
						<EditIcon />
					</Button>
					<Button onClick={handleDelete}>
						<DeleteIcon />
					</Button>
				</Action>
			</Container>

			<Modal show={show} handleClose={handleClose} title="Update Category">
				{<CategoryForm category={category} />}
			</Modal>
		</>
	);
};

const Container = styled.div`
	border: 1px solid rgba(231, 231, 231, 0.2);
	background-color: #161616;
	border-radius: 0.3rem;
	padding: 1.2rem;
	color: var(--white);
	margin-bottom: 1.5rem; 
`;

const Name = styled.h1`
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

const Description = styled.p`
	opacity: 0.6;
	font-weight: 500;
	font-size: 1.1rem;
`;

const Action = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: .5rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.3rem 0.4rem;
	font-weight: 500;
	font-size: 0.8rem;
	border-radius: 0.3rem;
	color: var(--white);
	transition: all 0.5s ease;

	&:first-child {
		background-color: var(--primary);
	}

	&:last-child {
		background-color: var(--danger);
	}

	&:hover {
		opacity: 0.9;
	}
`;

export default Category;
