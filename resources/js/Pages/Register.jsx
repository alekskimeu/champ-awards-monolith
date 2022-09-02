import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";

import FormInput from "../components/common/FormInput";

import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/code.png";

const Register = ({ errors }) => {
    console.log(errors);
	const { data, setData, post, progress } = useForm({
        email: "",
        password: "",
        password_confirmation: ""
    });

	// Handle form submission: Post data to DB
	const handleRegister = async (e) => {
		e.preventDefault();
		post("/admin/register", data);
	};

	return (
		<Container>
			<Form onSubmit={handleRegister}>
				<Header>
					<Logo src={logo} width="60" />
					<Greeting>Register Here</Greeting>
				</Header>
				<FormInput
					type="email"
					name="email"
					label="Email"
					value={data.email}
					onChange={(e) => setData('email', e.target.value)}
					required
				/>
				{ errors.email && <Error>{errors.email }</Error> }
				<FormInput
					type="password"
					label="Password"
					name="password"
					value={data.password}
					onChange={(e) => setData('password', e.target.value)}
					required
                />
				{ errors.password && <Error>{errors.email }</Error> }
                <FormInput
					type="password"
					label="Confirm Password"
					name="password_confirmation"
					value={data.password_confirmation}
					onChange={(e) => setData('password_confirmation', e.target.value)}
					required
				/>
				<InputContainer>
					<Button type="submit">
						Register
						<LoginIcon />
					</Button>
				</InputContainer>
			</Form>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 600px;
	margin: auto;
`;

const Header = styled.div`
	text-align: center;
	width: fit-content;
	margin: auto;
`;

const Logo = styled.img`
	width: 60px;
`;

const Greeting = styled.h1`
	color: var(--primary);
	font-weight: 600;
	font-size: 1.2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	padding: 3rem;
	border: 1px solid rgb(31, 118, 210, 0.8);
	border-radius: 0.3rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Error = styled.p`
	color: red;
`

const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border: none;
	cursor: pointer;
	width: fit-content;
	padding: 0.8rem 1.2rem;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 0.3rem;
	color: var(--white);
	background-color: var(--primary);
	transition: all 0.5s ease;

	&:hover {
		opacity: calc() 0.9;
	}
`;

export default Register;
