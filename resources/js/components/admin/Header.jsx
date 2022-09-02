import React from "react";
import styled from 'styled-components'
import { Inertia } from "@inertiajs/inertia";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {

	const handleLogout = () => {
		Inertia.post('/admin/logout');
	}

	return (
		<Container>
			<Search>
				<SearchRoundedIcon />
				<Input type="search" placeholder="Search Data" />
			</Search>
			<Button onClick={handleLogout}>
				Logout <LogoutIcon />
			</Button>
		</Container>
	);
};

const Container = styled.div`
	padding: 1rem 3rem;
	height: 5rem;
	background-color: var(--black);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	padding-left: 15vw;
	width: 100%;
	z-index: 1;
`;

const Search = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--white);
	width: 30vw;
	border-radius: 0.3rem;
	padding-left: 0.8rem;
`;

const Input = styled.input`
	width: 100%;
	border: none;
	padding: 0.8rem;
	outline: none;
	border-radius: 0.5rem;
	font-size: 1rem;
`;

const Button = styled.button`
	border: none;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	padding: 0.8rem 2rem;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 2rem;
	color: var(--white);
	background-color: var(--danger);
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.8;
	}
`;

export default Header;
