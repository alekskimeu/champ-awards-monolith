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
import Layout from "../components/client/Layout";

const Home = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Home</title>
                    <meta
                        name="description"
                        content="Vote for Champ Awards finalists"
                    />
                </Head>
                <Hero />
                <Container>
                    <Purposes />
                    <GetInvolved />
                    <SocialMedia />
                </Container>
            </Layout>
        </>
    );
};

const Wrapper = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary);
`;

const Container = styled.div``;

export default Home;
