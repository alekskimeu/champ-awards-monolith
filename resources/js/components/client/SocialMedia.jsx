import React, { useEffect } from "react";

import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialMedia = () => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <Container>
            <Wrapper data-aos="fade-up" data-aos-duration="2000">
                <Title>Find us online:</Title>
                <Icons>
                    <a href="" className="social-media-icon" target="_blank">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/champ_awards/"
                        className="social-media-icon"
                        target="_blank"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="social-media-icon" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </a>
                </Icons>
            </Wrapper>
        </Container>
    );
};

const Container = styled.section`
    padding: 5rem 1rem;
`;

const Wrapper = styled.div`
    max-width: 1300px;
    margin: auto;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

const Title = styled.h3`
    font-weight: 500;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

export default SocialMedia;
