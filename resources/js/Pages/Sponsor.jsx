import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "../components/client/Header";
import CustomHero from "../components/client/CustomHero";

import styled from "styled-components";

import { packages } from "../data/packages";
import Package from "../components/client/Package";
import Layout from "../components/client/Layout";

const Sponsor = () => {
    return (
        <Layout>
            <Head>
                <title>Sponsor our event</title>
                <meta name="description" content="Champ Awards finalists" />
            </Head>
            <Header />
            <CustomHero
                title="Get Involved"
                description="We welcome you on board to participate by offering your kind support.
                This is a great opportunity to give your brand visibility before, during and even after the event."
            />
            <Packages>
                <Wrapper>
                    {packages.map((item) => (
                        <Package key={item.index} item={item} />
                    ))}
                </Wrapper>
            </Packages>
        </Layout>
    );
};

const Packages = styled.section`
    padding: 8rem 2rem;
`;

const Wrapper = styled.div`
    max-width: 1600px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export default Sponsor;
