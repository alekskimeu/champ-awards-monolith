import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";

import FormInput from "../common/FormInput";

const ContestantForm = ({ participant, events, categories, setShow }) => {
	const { data, setData, post, progress } = useForm({
        firstName: participant ? participant.firstName : "",
        lastName: participant ? participant.lastName : "",
        age: participant ? participant.age : "",
		gender: participant ? participant.gender : "",
        category_id: participant ? participant.category_id : "",
        event_id: participant ? participant.event_id : "",
        photo: participant ? participant.photo : null,
    });

    // TODO: Close modal after form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        participant ? post(`/participants/${participant.id}`, data) : post("/participants", data);
		setShow(false);
    };

	return (
		<Container>
			<Form onSubmit={handleSubmit} encType="multipart/form-data">
				{participant && <Image src={`/storage/images/${participant.image}`} width="100" height="100" />}
				<FormGroup>
					<FormInput
						type="text"
						label="First Name"
						value={participant ? participant.firstName : data.firstName}
						required
						onChange={(e) => setData("firstName", e.target.value)}
					/>
					<FormInput
						type="text"
						label="Last Name"
						value={participant ? participant.lastName : data.lastName}
						required
						onChange={(e) => setData("lastName", e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<FormInput
						type="number"
						label="Age"
						value={participant ? participant.age : data.age}
						required
						onChange={(e) => setData("age", e.target.value)}
					/>
					<InputContainer>
						<Label>
							Gender
							<Required>*</Required>
						</Label>
						<RadioContainer>
							<Radio
								type="radio"
								value="Male"
								name="gender"
								onChange={(e) => setData("gender", e.target.value)}
								checked={participant && participant.gender === "Male"}
							/>{" "}
							Male
							<Radio
								type="radio"
								value="Female"
								name="gender"
								onChange={(e) => setData("gender", e.target.value)}
								checked={participant && participant.gender === "Female"}
							/>{" "}
							Female
						</RadioContainer>
					</InputContainer>
				</FormGroup>
				<FormGroup>
					<InputContainer>
						<Label>
							Event
							<Required>*</Required>
						</Label>

						<Select
							required
							name="event_id"
							onChange={(e) => setData("event_id", e.target.value)}
							value={participant ? participant.event_id : data.event_id}
						>
						<Option>Event</Option>	
							{events && events.map(event => (
								<Option key={event.id} value={event.id}>{event.name}</Option>
							))}
						</Select>
					</InputContainer>
					<InputContainer>
						<Label>
							Category
							<Required>*</Required>
						</Label>

						<Select
							required
							onChange={(e) => setData("category_id", e.target.value)}
							name="category_id"
							value={participant ? participant.category_id : data.category_id}
						>					
						<Option>Category</Option>	
							{categories && categories.map(category => (
								<Option key={category.id} value={category.id}>{category.name}</Option>
							))}
						</Select>
					</InputContainer>
				</FormGroup>
				<FormGroup>
					<FormInput type="file" label="Photo" name="photo"
						onChange={(e) => setData("photo", e.target.files[0])}
					/>
				</FormGroup>
				<InputContainer>
					<Button>{participant ? "Update" : "Submit"}</Button>
				</InputContainer>
			</Form>
		</Container>
	);
};

const Container = styled.div`
	/* display: flex;
	flex-direction: column;
	gap: 2rem; */
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const FormGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 3rem;
`;

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
	margin-left: 0.2rem;
`;

const RadioContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
`;

const Radio = styled.input`
	/* color: #ca0101;
	margin-left: 0.2rem; */
`;

const Select = styled.select`
	padding: 0.6rem;
	border: 1px solid rgba(231, 231, 231, 0.1);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;
	cursor: pointer;

	&:focus {
		border-color: var(--primary);
	}
`;

const Option = styled.option``;

const Image = styled.img`
	border-radius: 50%;
	object-fit: cover;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.65rem 1rem;
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

export default ContestantForm;
