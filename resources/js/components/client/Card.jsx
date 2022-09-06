import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

import styled from "styled-components";

import image from "../../assets/user.jpg";
import ConfirmDialog from "../ConfirmDialog";
import { Inertia } from "@inertiajs/inertia";

const Card = ({ user, category }) => {
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subtitle: "",
        buttonText: "",
    });

    return (
        <Container>
            <Header>
                <Image src={`/storage/${user.photo}`} width="70" height="70" />
                <Content>
                    <Name>
                        {user.firstName} {user.lastName}
                    </Name>
                    <Gender>{user.gender}</Gender>
                    <LinearProgress variant="determinate" value={user.votes} />
                    <Percentage>{user.votes / 100}%</Percentage>
                    {/* <Votes>{user.votes} Votes</Votes> */}
                    <Button href={`auth/google/redirect/${user.id}`}>
                        Vote <HowToVoteIcon />
                    </Button>
                </Content>
                <Category>{category[0].name}</Category>
            </Header>
        </Container>
    );
};

const Container = styled.div`
    border: 1px solid rgba(231, 231, 231, 0.2);
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

const Name = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
`;
const Gender = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
`;

const Category = styled.p`
    position: absolute;
    right: 0;
    font-size: 0.7rem;
    opacity: 0.6;
    font-weight: 600;
    border: 2px solid var(--primary);
    padding: 0.2rem 1rem 0.1rem;
    border-radius: 1rem;
    color: var(--primary);
`;

const Percentage = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.2rem;
`;

const Votes = styled.p`
    opacity: 0.6;
    font-weight: 600;
    font-size: 1.05rem;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    width: fit-content;
    margin-top: 0.5rem;
    padding: 0.3rem 0.5rem;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    color: var(--primary);
    border: 1px solid var(--primary);
    background-color: transparent;
    transition: all 0.5s ease;

    &:hover {
        color: #a7caed;
        border: 1px solid #a7caed;
    }
`;

export default Card;
