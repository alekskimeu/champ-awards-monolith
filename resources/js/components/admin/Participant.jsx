import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import image from "../../assets/user.jpg";
import ConfirmDialog from "../ConfirmDialog";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";

const Participant = ({ participant, category, categories, events }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    return (
        <>
            <Container>
                <Header>
                    <Image
                        src={`/storage/${participant.photo}`}
                        width="60"
                        height="60"
                    />
                    <Content>
                        <Name>
                            {participant.firstName} {participant.lastName}
                        </Name>
                        <Age>{participant.age} yrs</Age>
                        <Gender>{participant.gender} </Gender>
                        <Action>
                            <Button>
                                <EditIcon onClick={showModal} />
                            </Button>
                            <Button>
                                <DeleteIcon />
                            </Button>
                        </Action>
                    </Content>
                    <Category>{category[0].name}</Category>
                </Header>
            </Container>

            <Modal
                show={show}
                handleClose={handleClose}
                title="Update Contestant"
            >
                <ContestantForm
                    participant={participant}
                    events={events}
                    categories={categories}
                />
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

const Header = styled.div`
	display: flex;
	gap: 1.5rem;
	position: relative;
`;

const Image = styled.img`
	border-radius: 50%;
	border: 2px solid var(--white);
	padding: 0.1rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

const Name = styled.h1`
	font-size: 1.1rem;
	font-weight: 600;
`;

const Age = styled.p`
	opacity: 0.6;
	font-weight: 600;
	font-size: 1rem;
`;

const Gender = styled.p`
	opacity: 0.6;
	font-weight: 600;
	font-size: 1rem;
`;

const Action = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.4rem 0.6rem;
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

const Category = styled.p`
	position: absolute;
	right: 0;
	font-size: .7rem;
	opacity: .6;
	font-weight: 600;
	border: 2px solid var(--primary);
	padding: 0.2rem 1rem .1rem;
	border-radius: 1rem;
	color: var(--primary);
`

export default Participant;
