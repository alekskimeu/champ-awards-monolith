import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "@inertiajs/inertia-react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "./Image";
import Countdown from "./Countdown";

import ladies from "../../assets/ladies.webp";
import SocialMedia from "./SocialMedia";

const CustomHero = ({ title, description }) => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container>
            <Hero>
                <Content data-aos="fade-right" data-aos-duration="2000">
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Cta>
                        <a href="" className="contact-icon">
                            <i className="fas fa-phone"></i> +255-685-652-130
                        </a>
                        <a
                            href="mailto:michael.nandwa@arushameru.sc.tz"
                            className="contact-icon"
                        >
                            <i className="fas fa-envelope"></i>{" "}
                            michael.nandwa@arushameru.sc.tz
                        </a>
                    </Cta>
                </Content>
                <Image image={ladies} />
            </Hero>
        </Container>
    );
};

const Container = styled.section`
    background-color: var(--secondary);
    padding: 9rem 2rem;
    min-height: 70vh;
`;

const Hero = styled.div`
    max-width: 1600px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 10rem;

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
    display: flex;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 1340px) {
        flex-direction: column;
        align-items: start;
        gap: 1rem;
    }

    @media screen and (max-width: 1000px) {
        align-items: center;
    }
`;

export default CustomHero;
