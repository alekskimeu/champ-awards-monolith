import React from "react";
import styled from "styled-components";

import Purpose from "./Purpose";

import { purposes } from "../../data/purpose";

import image from "../../assets/header.webp";

const Purposes = () => {
    return (
        <Container>
            <Content>
                <Title>Champ Awards</Title>
                <Description>
                    The world breaks everyone, and afterwards, many are strong
                    at the broken places.
                </Description>
            </Content>
            {purposes.map((purpose) => (
                <Purpose purpose={purpose} key={purpose.index} />
            ))}
        </Container>
    );
};

const Container = styled.section`
    max-width: 1600px;
    margin: 5rem auto;
    padding: 17rem 3rem 5rem 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 2rem;
    border-radius: 0.5rem;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
                360deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.85)
            ),
            url(${image});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 0.8rem;
    }
`;

const Content = styled.div``;

const Title = styled.h1`
    color: var(--white);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    opacity: 0.8;
`;

const Description = styled.p`
    color: var(--white);
    opacity: 0.7;
    font-size: 1.2rem;
`;

export default Purposes;
