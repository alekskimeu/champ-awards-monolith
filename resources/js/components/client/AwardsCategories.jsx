import React, { ReactDOM } from "react";
import styled from "styled-components";
import Participant from "./Participant";

const AwardsCategories = ({ category, awards, participants }) => {
    return (
        <>
            {awards.map((award) => (
                <Cards key={award.id}>
                    <CardHeader>
                        <AwardName>{award.name}</AwardName>
                        <Category>{category.name}</Category>
                    </CardHeader>
                    <CardsContainer>
                        {participants
                            .filter(
                                (participant) =>
                                    participant.award_id === award.id
                            )
                            .map((participant) => (
                                <Participant participant={participant} />
                            ))}
                    </CardsContainer>
                </Cards>
            ))}
        </>
    );
};

const Cards = styled.div``;

const CardHeader = styled.div`
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.4rem 0.6rem;
    border-top-right-radius: 0.3rem;
    border-top-left-radius: 0.3rem;
`;

const Category = styled.h3`
    color: var(--white);
`;

const AwardName = styled.h4`
    color: var(--white);
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--white);
    padding: 1.5rem;
    border-bottom-right-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
`;

export default AwardsCategories;
