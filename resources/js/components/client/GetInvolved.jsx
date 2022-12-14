import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import { Link } from "@inertiajs/inertia-react";
import image from "../../assets/header.jpg";

const GetInvolved = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container>
            <Content data-aos="fade-up" data-aos-duration="2000">
                <Title>Get Involved</Title>
                <Description>
                    We are giving interested corporate and individual partners
                    an opportunity to come on board.
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
    padding: 8rem 2rem;
    background-color: #f5f5f5;
    position: relative;
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

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export default GetInvolved;
