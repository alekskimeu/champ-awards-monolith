import React from "react";
import styled from "styled-components";

const Purpose = ({ purpose }) => {
    return (
        <Container>
            <Image
                src={purpose.image}
                alt={purpose.title}
                width="40"
                height="40"
            />
            <Title>{purpose.title}</Title>
            <Description>{purpose.description}</Description>
        </Container>
    );
};

const Container = styled.div`
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
    border: 1px solid rgba(225, 173, 51, 0.4);
`;

const Image = styled.img`
    max-width: 100%;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    opacity: 0.8;
    font-weight: 600;
    margin-top: 0.6rem;
    width: fit-content;
    text-transform: capitalize;
    color: var(--white);
    position: relative;

    &::after {
        position: absolute;
        content: "";
        bottom: -0.2rem;
        left: 0;
        width: 100%;
        border: none;
        background-color: rgba(225, 173, 51, 0.8);
        height: 1px;
        opacity: 0.4;
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    opacity: 0.7;
    color: var(--white);
    margin-top: 1rem;
`;

export default Purpose;
