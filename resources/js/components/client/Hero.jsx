import React from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

import Image from "./Image";
import Countdown from "./Countdown";

import ladies from "../../assets/ladies.webp";

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>CHAMP AWARDS</Title>
                <Description>
                    The Annual{" "}
                    <Span>CHAMP AWARDS {new Date().getFullYear()}</Span> edition
                    will be happening on <Span>8th October</Span>
                    . <br />
                    In the meantime, be sure to vote for your favorite finalist!
                </Description>
                <Countdown />
                <Cta>
                    <Link href="/vote" className="hero-btn">
                        Vote
                    </Link>
                    <Link href="#" className="learn-more">
                        Learn more
                        <i className="fas fa-arrow-right-long"></i>
                    </Link>
                </Cta>
            </Content>
            <Image image={ladies} />
        </Container>
    );
};

const Container = styled.div`
    padding: 8rem 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    max-width: 1300px;
    margin: auto;
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

export default Hero;
