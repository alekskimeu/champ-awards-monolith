import React from "react";
import styled from "styled-components";

const FormInput = ({ label, type, value, onChange, item, required }) => {
	return (
		<InputContainer>
			<Label>
				{label}
				{required && <Required>*</Required>}
			</Label>
			<Input
				type={type}
				placeholder={label}
				defaultValue={value}
				onChange={onChange}
				required
			/>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 1.1rem;
`;

const Required = styled.label`
	color: #ca0101;
	margin-left: .2rem;
`;

const Input = styled.input`
	padding: 0.6rem;
	border: 1px solid rgba(226, 226, 226);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;

	&:focus {
		border-color: var(--primary);
	}
`;

export default FormInput;
