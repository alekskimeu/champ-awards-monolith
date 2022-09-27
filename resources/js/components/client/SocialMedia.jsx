import React from "react";

import styled from "styled-components";

const SocialMedia = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Find us online:</Title>
                <Icons>
                    <a href="" className="social-media-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="" className="social-media-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="social-media-icon">
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
