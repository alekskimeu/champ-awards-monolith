import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";

import FormInput from "../common/FormInput";

const EventForm = ({ event, setShow }) => {
	const { data, setData, post, progress } = useForm({
        name: event ? event.name : "",
        date: event ? event.date : "",
        description: event ? event.description : "",
        image: event ? event.image : null,
    });

    // TODO: Close modal after form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        event ? post(`/events/${event.id}`, data) : post("/events", data);
		setShow(false);
    };

	return (
		<Container>
			<Form onSubmit={handleSubmit} encType="multipart/form-data">
				{event && (
					<ImageContainer>
						<Image src={`/storage/${ event.image }`} width="120" height="120" />
					</ImageContainer>
				)}
				<FormGroup>
					<FormInput
						type="text"
						label="Event Name"
						value={event ? event.name : data.name}
						onChange={(e) => setData("name", e.target.value)}
						required
					/>
					<FormInput
						type="date"
						label="Date"
						value={event ? event.date : data.date}
						onChange={(e) => setData("date", e.target.value)}
						required
					/>
				</FormGroup>
				<InputContainer>
					<Label>
						Description<Required>*</Required>
					</Label>
					<Textarea
						placeholder="Description"
						name="description"
						rows="5"
						onChange={(e) => setData("description", e.target.value)}
						defaultValue={event ? event.description : data.description}
						required
					/>
				</InputContainer>
				<FormGroup>
					<FormInput
						type="file"
						label="Image"
						name="image"
						onChange={(e) => setData("image", e.target.files[0])}
					/>
				</FormGroup>
				<InputContainer>
					<Button>{event ? "Update" : "Submit"}</Button>
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
	gap: 3rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Label = styled.label`
	font-weight: 600;
	font-size: 1.1rem;
`;

const Required = styled.label`
	color: #ca0101;
	margin-left: 0.2rem;
`;

const Textarea = styled.textarea`
	padding: 0.7rem 0.8rem;
	border: 1px solid rgba(226, 226, 226);
	outline: none;
	font-size: 1rem;
	width: 100%;
	border-radius: 0.3rem;

	&:focus {
		border-color: var(--primary);
	}
`;

const ImageContainer = styled.div`
	width: 120px;
	height: 120px;
`;

const Image = styled.img`
	border: 2px solid #5f5f5f;
	border-radius: 50%;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
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

export default EventForm;
