import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Purpose from "./Purpose";

import { purposes } from "../../data/purpose";

import image from "../../assets/header.webp";

const Purposes = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container>
            <Content data-aos="fade-right" data-aos-duration="1800">
                <Title>Champ Awards</Title>
                <Description>
                    Celebrate students in music, acting, sports, and other
                    fields of entertainment.
                </Description>
            </Content>
            <Wrapper>
                {purposes.map((purpose) => (
                    <Purpose purpose={purpose} key={purpose.index} />
                ))}
            </Wrapper>
        </Container>
    );
};

const Container = styled.section`
    max-width: 1600px;
    margin: 5rem auto;
    padding: 17rem 2rem 5rem 2rem;
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
                0deg,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.7)
            ),
            url(${image});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border-radius: 0.8rem;

        @media screen and (max-width: 1600px) {
            border-radius: 0;
        }

        @media screen and (max-width: 1400px) {
            background-image: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 1),
                    rgba(0, 0, 0, 0.8)
                ),
                url(${image});
        }
    }
`;

const Content = styled.div`
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    color: var(--white);
    font-weight: 600;
    margin-bottom: 0.6rem;
    font-size: 1.3rem;
    opacity: 0.8;
    max-width: 600px;
`;

const Description = styled.p`
    color: var(--white);
    opacity: 0.9;
    font-size: 1.3rem;
    max-width: 600px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr;
    }
`;

export default Purposes;
