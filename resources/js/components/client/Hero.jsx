import React from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";

import Image from "./Image";

const Hero = () => {
    return (
        <Container>
            <Content>
                <Title>CHAMP AWARDS {new Date().getFullYear()}</Title>
                <Description>
                    The world breaks everyone, and afterwards, many are strong
                    at the broken places. The world breaks everyone, and
                    afterwards, many are strong at the broken places.
                </Description>
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
        </Container>
    );
};

const Container = styled.div`
    padding: 3rem 1rem 8rem 1rem;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 3rem;
`;

const Title = styled.h1`
    color: var(--primary);
    max-width: 800px;
    text-align: center;
`;

const Description = styled.h2`
    color: var(--white);
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 1rem;
    max-width: 800px;
    text-align: center;
`;

const Cta = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

export default Hero;
