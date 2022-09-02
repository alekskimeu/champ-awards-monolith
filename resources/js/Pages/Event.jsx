import React, { useEffect, useState } from "react";
import Modal from "../components/admin/Modal";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styled from "styled-components";
import Layout from "../components/admin/Layout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import image from "../assets/header.jpg";
import EventForm from "../components/admin/EventForm";
import Participant from "../components/admin/Participant";

const Event = ({ event, participants }) => {

	const [search, setSearch] = useState("");
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};

	const showModal = () => {
		setShow(true);
	};

	return (
		<Layout>
			<Content>
				<EventContainer>
					<ImageContainer>
						<Image src={`/storage/${event.image}`} alt={event.name} />
					</ImageContainer>
					<Details>
						<Title>{event.name}</Title>
						<EventDate>{event.date}</EventDate>
						<Description>
							{event.description}
						</Description>
						<Cta>
							<Button onClick={showModal}>Edit</Button>
							<Button>Delete</Button>
						</Cta>
					</Details>
				</EventContainer>

				<ParticipantsContainer>
					<SectionHeader>
						<Title>Participants</Title>
						<Search>
							<SearchRoundedIcon />
							<Input
								type="search"
								placeholder="Search Participant"
								onChange={(e) => setSearch(e.target.value)}
							/>
						</Search>
					</SectionHeader>
					<Participants>
						{participants.map((participant) => (
							<Participant participant={participant} key={participant.id} />
						))}
					</Participants>
				</ParticipantsContainer>

				<Modal show={show} handleClose={handleClose} title="Add Event">
					{<EventForm event={event} />}
				</Modal>
			</Content>
		</Layout>
	);
};

const Content = styled.div`
	padding: 1rem 3rem;
	margin-top: 2rem;
	width: 100%;
`;

const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;

	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const EventContainer = styled.div`
	display: flex;
	gap: 3rem;
`;

const ImageContainer = styled.div`
	flex: 0.5;
	height: 350px;
	border-radius: 0.5rem;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 0.5rem;
`;

const Details = styled.div`
	flex: 1;
`;

const EventDate = styled.h3`
	opacity: 0.8;
	font-size: 1.2rem;
`;

const Description = styled.p`
	font-size: 1.25rem;
	margin-top: 1rem;
`;

const Cta = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	border: none;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.6rem;
	font-weight: 600;
	font-size: 0.9rem;
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

const Title = styled.h2`
	font-size: 1.3rem;
`;

const Search = styled.div`
	display: flex;
	align-items: center;
	background-color: #e9e9e9;
	width: 20vw;
	border-radius: 0.5rem;
	padding-left: 0.8rem;
`;

const Input = styled.input`
	background-color: #e9e9e9;
	width: 100%;
	border: none;
	padding: 0.9rem;
	outline: none;
	border-radius: 0.5rem;
	font-size: 1rem;
`;

const ParticipantsContainer = styled.div`
	margin-top: 3rem;
`;

const SectionHeader = styled.div`
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Participants = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

export default Event;
