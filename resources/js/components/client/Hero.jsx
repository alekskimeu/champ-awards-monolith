import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

import Image from "./Image";
import Countdown from "./Countdown";

import AOS from "aos";
import "aos/dist/aos.css";

import ladies from "../../assets/ladies.webp";

const Hero = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container>
            <Wrapper>
                <Content data-aos="fade-right" data-aos-duration="2000">
                    <Title>CHAMP AWARDS {new Date().getFullYear()}</Title>
                    <Description>
                        The Annual CHAMP AWARDS {new Date().getFullYear()}{" "}
                        edition will be happening on <br />
                        <Span>8th October 2022</Span>
                        <br />
                        In the meantime, be sure to vote for your favorite
                        finalist!
                    </Description>
                    <Countdown />
                    <Cta>
                        <Link href="/vote" className="hero-btn">
                            Vote
                        </Link>
                        <Link href="#" className="learn-more">
                            Get Involved
                            <i className="fas fa-arrow-right-long"></i>
                        </Link>
                    </Cta>
                </Content>
                <Image image={ladies} />
            </Wrapper>
        </Container>
    );
};

const Container = styled.section`
    padding: 9rem 2rem;
    min-height: 70vh;
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    max-width: 1600px;
    margin: auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        justify-content: center;
        text-align: center;
        gap: 5rem;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h1`
    color: var(--primary);
    font-size: 1.8rem;

    @media screen and (max-width: 1000px) {
        max-width: 800px;
        margin: auto;
    }
`;

const Description = styled.h2`
    color: #e0e0e0;
    font-weight: 500;
    margin-bottom: 1rem;

    @media screen and (max-width: 1000px) {
        max-width: 800px;
        margin: auto;
    }
`;

const Span = styled.span`
    color: var(--primary);
    font-weight: 700;
    text-transform: uppercase;
`;

const Cta = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export default Hero;
