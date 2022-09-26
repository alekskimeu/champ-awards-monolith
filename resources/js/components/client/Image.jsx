import React from "react";
import styled from "styled-components";

const Image = ({ image }) => {
    return (
        <ImageContainer>
            <HeroImage src={image} alt="Champ Awards" />
        </ImageContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    top: -10rem;
    position: relative;
`;

const HeroImage = styled.img`
    max-width: 100%;
    height: 400px;
    border-radius: 0.3rem;
    object-fit: cover;
`;

export default Image;
