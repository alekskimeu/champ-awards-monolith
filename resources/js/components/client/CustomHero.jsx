import React from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

import Image from "./Image";
import Countdown from "./Countdown";

import ladies from "../../assets/ladies.webp";

const CustomHero = ({ title, description }) => {
    return (
        <Container>
            <Hero>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Countdown />
                </Content>
                <Image image={ladies} />
            </Hero>
        </Container>
    );
};

const Container = styled.section`
    padding: 8rem 1rem;
    background-color: var(--secondary);
`;

const Hero = styled.div`
    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    color: var(--primary);
    font-size: 1.8rem;
`;

const Description = styled.h2`
    color: #e0e0e0;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const Span = styled.span`
    color: var(--primary);
    font-weight: 700;
`;

const Cta = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export default CustomHero;
