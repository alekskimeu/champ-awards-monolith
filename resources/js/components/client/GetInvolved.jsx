import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "@inertiajs/inertia-react";
import image from "../../assets/header.jpg";

const GetInvolved = () => {
    return (
        <Container>
            <Content>
                <Title>Get Involved</Title>
                <Description>
                    The world breaks everyone, and afterwards, many are strong
                    at the broken places.
                </Description>
                <Cta>
                    <Link href="/vote" className="vote-link">
                        Vote
                    </Link>
                    <Link href="/" className="btn-sponsor">
                        Sponsor<i className="fas fa-arrow-right-long"></i>
                    </Link>
                </Cta>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    padding: 8rem 1rem;
    background-color: #f5f5f5;
`;

const Content = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    color: var(--secondary);
    max-width: 600px;
    margin: auto;
    text-align: center;
`;

const Description = styled.p`
    font-size: 1.3rem;
    color: var(--black);
    opacity: 0.8;
    max-width: 600px;
    margin: auto;
    text-align: center;
`;

const Cta = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
`;

export default GetInvolved;
