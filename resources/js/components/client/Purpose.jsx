import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Purpose = ({ purpose }) => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container data-aos="fade-up" data-aos-duration="2000">
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
    border: 1px solid rgba(231, 231, 231, 0.2);
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
        background-color: rgba(231, 231, 231, 0.4);
        height: 1px;
        opacity: 0.4;
    }
`;

const Description = styled.p`
    font-size: 1.25rem;
    opacity: 0.8;
    color: var(--white);
    margin-top: 1rem;
`;

export default Purpose;
