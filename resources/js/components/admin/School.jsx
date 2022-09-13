import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import ConfirmDialog from "../ConfirmDialog";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";
import SchoolForm from "./SchoolForm";

const School = ({ school }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    const handleDelete = () => {
        Inertia.delete(`/schools/${school.id}`);
    };

    return (
        <>
            <Container>
                <Name>{school.name}</Name>
                <Description>{school.description.slice(0, 80)}...</Description>
                <Action>
                    <Button onClick={showModal}>
                        <EditIcon />
                    </Button>
                    <Button onClick={handleDelete}>
                        <DeleteIcon />
                    </Button>
                </Action>
            </Container>

            <Modal show={show} handleClose={handleClose} title="Update School">
                {<SchoolForm school={school} />}
            </Modal>
        </>
    );
};

const Container = styled.div`
    border: 1px solid var(--border);
    background-color: var(--primary-bg);
    border-radius: 0.3rem;
    padding: 1.2rem;
    color: var(--white);
    margin-bottom: 1.5rem;
`;

const Name = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    opacity: 0.8;
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
    margin-top: 0.5rem;
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

export default School;
