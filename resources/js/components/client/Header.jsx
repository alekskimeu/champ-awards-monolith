import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "@inertiajs/inertia-react";

import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <Container>
            <Navbar>
                <Left>
                    <Link href="/" className="brand">
                        <Logo src={logo} alt="Champ Awards" width="50" />
                    </Link>
                </Left>
                <Menu>
                    <Link href="/" className="nav-link">
                        Home
                    </Link>
                    <Link href="/" className="nav-link">
                        About
                    </Link>
                    <Link href="/" className="nav-link">
                        Sponsor
                    </Link>
                </Menu>

                <Button url="/vote" title="Vote" />
            </Navbar>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 5rem;
    background-color: var(--secondary);
`;

const Navbar = styled.nav`
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    height: 100%;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Logo = styled.img``;

const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export default Header;
