import React from "react";
import styled from "styled-components";
import LinearProgress from "@mui/material/LinearProgress";
import logo from "../../assets/user.jpg";

const Participant = ({ participant }) => {
    return (
        <Card>
            <Image
                src={`/storage/${participant.photo}`}
                alt={participant.firstName}
                width="50"
                height="50"
            />
            <Details>
                <Name>
                    {participant.firstName} {participant.lastName}{" "}
                </Name>
                <Gender>{participant.gender}</Gender>
                <LinearProgress
                    variant="determinate"
                    value={participant.votes}
                />
            </Details>
        </Card>
    );
};

const Card = styled.div`
    background-color: #f5f5f5;
    border: 1px solid var(--secondary);
    padding: 0.8rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:active {
        background-color: var(--secondary);
    }
`;

const Image = styled.img`
    border-radius: 50%;
    border: 2px solid var(--primary);
    padding: 0.1rem;
`;

const Details = styled.div``;

const Name = styled.h3`
    font-size: 1.1rem;
`;

const Gender = styled.p``;

export default Participant;
