import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "../components/client/Header";
import CustomHero from "../components/client/CustomHero";

import styled from "styled-components";

import { packages } from "../data/packages";
import Package from "../components/client/Package";

const Sponsor = () => {
    return (
        <>
            <Head>
                <title>Sponsor our event</title>
                <meta name="description" content="Champ Awards finalists" />
            </Head>
            <Header />
            <CustomHero
                title="Sponsorship"
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
        </>
    );
};

const Container = styled.section``;

const Packages = styled.section`
    padding: 5rem 1rem;
`;

const Wrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 3rem;
`;

export default Sponsor;
