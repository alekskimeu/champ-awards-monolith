import React, { useEffect } from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";

const Image = ({ image }) => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <ImageContainer data-aos="fade-up" data-aos-duration="2000">
            <HeroImage src={image} alt="Champ Awards" />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 0.5rem;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const HeroImage = styled.img`
    max-width: 100%;
    max-height: 500px;
    border-radius: 0.5rem;
    object-fit: cover;
`;

export default Image;
