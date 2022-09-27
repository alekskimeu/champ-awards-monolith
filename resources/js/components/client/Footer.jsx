import React from "react";
import { Link } from "@inertiajs/inertia-react";
import styled from "styled-components";

import image from "../../assets/header.jpg";

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Links>
                    <Link href="/" className="footer-link">
                        Home
                    </Link>
                    <Link href="/about" className="footer-link">
                        About
                    </Link>
                    <Link href="/sponsor" className="footer-link">
                        Sponsor
                    </Link>
                    <Link href="/vote" className="footer-link">
                        Vote
                    </Link>
                </Links>
                <Copyright>
                    &copy;{new Date().getFullYear()} Champ Awards
                </Copyright>
            </Wrapper>
        </Container>
    );
};

const Container = styled.footer`
    padding: 2rem 1rem 1rem 1rem;
    background-color: var(--secondary);
`;

const Wrapper = styled.div`
    max-width: 1600px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Links = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const Copyright = styled.p`
    color: var(--white);
    opacity: 0.8;
`;

export default Footer;
