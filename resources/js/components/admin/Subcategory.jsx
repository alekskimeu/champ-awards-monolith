import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

import image from "../../assets/user.jpg";
import ConfirmDialog from "../ConfirmDialog";
import ContestantForm from "./ContestantForm";
import Modal from "./Modal";
import SubcategoryForm from "./SubcategoryForm";

const Subcategory = ({ participants, subcategory, categories }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    const handleDelete = () => {
        Inertia.delete(`/subcategories/${subcategory.id}`);
    };

    return (
        <>
            <Container>
                <Header>
                    <Content>
                        <Name>{subcategory.name}</Name>
                        <Participants>
                            {participants.length > 0 &&
                                participants.filter(
                                    (participant) =>
                                        participant.subcategory_id ===
                                        subcategory.id
                                ).length}{" "}
                            Participants
                        </Participants>
                        <Action>
                            <Link
                                href={`/subcategories/${subcategory.id}`}
                                className="btn-more"
                            >
                                Details
                            </Link>
                            <Cta>
                                <Button>
                                    <EditIcon onClick={showModal} />
                                </Button>
                                <Button onClick={handleDelete}>
                                    <DeleteIcon />
                                </Button>
                            </Cta>
                        </Action>
                    </Content>
                </Header>
            </Container>

            <Modal
                show={show}
                handleClose={handleClose}
                title="Update Subcategory"
            >
                {
                    <SubcategoryForm
                        subcategory={subcategory}
                        categories={categories}
                    />
                }
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

const Header = styled.div`
    display: flex;
    gap: 1.5rem;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    flex: 1;
`;

const Name = styled.h1`
    font-size: 1.1rem;
    font-weight: 600;
    opacity: 0.8;
    color: var(--white);
`;

const Participants = styled.p`
    opacity: 0.6;
    font-weight: 600;
    font-size: 1rem;
    color: var(--white);
`;

const Action = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
`;

const Cta = styled.div`
    display: flex;
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
    padding: 0.4rem 0.5rem;
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

export default Subcategory;
