import React from "react";
import { Head } from "@inertiajs/inertia-react";
import styled from "styled-components";

import Countdown from "../components/client/Countdown";

import Purposes from "../components/client/Purposes";

import Button from "../components/client/Button";
import Header from "../components/client/Header";
import Hero from "../components/client/Hero";
import GetInvolved from "../components/client/GetInvolved";
import SocialMedia from "../components/client/SocialMedia";
import Footer from "../components/client/Footer";
import Image from "../components/client/Image";
import image from "../assets/header.webp";
import ladies from "../assets/ladies.webp";

const Home = () => {
    return (
        <>
            <Head>
                <title>Champ Awards</title>
                <meta
                    name="description"
                    content="Vote for Champ Awards finalists"
                />
            </Head>
            <Wrapper>
                <Header />
                <Hero />
            </Wrapper>
            <Container>
                <Images>
                    <Image image={image} />
                    <Image image={ladies} />
                </Images>
                <Purposes />
                <GetInvolved />
                <SocialMedia />
                <Footer />
            </Container>
        </>
    );
};

const Wrapper = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        position: absolute;
        height: 80vh;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: var(--secondary);
        transform: skewY(-3deg);
    }
`;

const Container = styled.div``;

const Images = styled.div`
    max-width: 1300px;
    gap: 2rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export default Home;
