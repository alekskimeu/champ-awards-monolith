import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/inertia-react";

import FormInput from "../common/FormInput";

const ContestantForm = ({ participant, schools, subcategories, setShow }) => {
    const { data, setData, post, progress } = useForm({
        firstName: participant ? participant.firstName : "",
        lastName: participant ? participant.lastName : "",
        gender: participant ? participant.gender : "",
        award_id: participant ? participant.award_id : "",
        school_id: participant ? participant.school_id : "",
        photo: participant ? participant.photo : null,
    });

    const handleMale = () => {
        setData("gender", "Male");
    };

    const handleFemale = () => {
        setData("gender", "Female");
    };

    // TODO: Close modal after form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        participant
            ? post(`/participants/${participant.id}`, data)
            : post("/participants", data);
        setShow(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                {participant && (
                    <Image
                        src={`/storage/${participant.photo}`}
                        width="100"
                        height="100"
                    />
                )}
                <FormGroup>
                    <FormInput
                        type="text"
                        label="First Name"
                        value={
                            participant ? participant.firstName : data.firstName
                        }
                        required
                        onChange={(e) => setData("firstName", e.target.value)}
                    />
                    <FormInput
                        type="text"
                        label="Last Name"
                        value={
                            participant ? participant.lastName : data.lastName
                        }
                        required
                        onChange={(e) => setData("lastName", e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <InputContainer>
                        <Label>
                            Gender
                            <Required>*</Required>
                        </Label>
                        <RadioContainer>
                            <Radio
                                type="radio"
                                defaultValue={
                                    participant ? participant.gender : "Male"
                                }
                                name="gender"
                                onChange={handleMale}
                                defaultChecked={
                                    participant && participant.gender === "Male"
                                }
                            />{" "}
                            Male
                            <Radio
                                type="radio"
                                value={
                                    participant ? participant.gender : "Female"
                                }
                                name="gender"
                                onChange={handleFemale}
                                defaultChecked={
                                    participant &&
                                    participant.gender === "Female"
                                }
                            />{" "}
                            Female
                        </RadioContainer>
                    </InputContainer>
                    <InputContainer>
                        <Label>
                            School
                            <Required>*</Required>
                        </Label>

                        <Select
                            required
                            name="school_id"
                            onChange={(e) =>
                                setData("school_id", e.target.value)
                            }
                            value={
                                participant
                                    ? participant.school_id
                                    : data.school_id
                            }
                        >
                            <Option>School</Option>
                            {schools &&
                                schools.map((school) => (
                                    <Option key={school.id} value={school.id}>
                                        {school.name}
                                    </Option>
                                ))}
                        </Select>
                    </InputContainer>
                </FormGroup>
                <FormGroup>
                    <InputContainer>
                        <Label>
                            Category
                            <Required>*</Required>
                        </Label>

                        <Select
                            required
                            onChange={(e) =>
                                setData("award_id", e.target.value)
                            }
                            name="award_id"
                            value={
                                participant
                                    ? participant.award_id
                                    : data.award_id
                            }
                        >
                            <Option>Category</Option>
                            {subcategories &&
                                subcategories.map((subcategory) => (
                                    <Option
                                        key={subcategory.id}
                                        value={subcategory.id}
                                    >
                                        {subcategory.name}
                                    </Option>
                                ))}
                        </Select>
                    </InputContainer>
                    <FormInput
                        type="file"
                        label="Photo"
                        name="photo"
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
