import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "@inertiajs/inertia-react";

import logo from "../../assets/logo.png";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <Nav>
                <Link href="/" className="brand">
                    <Logo src={logo} alt="Champ Awards" width="50" />
                </Link>
                <Navbar show={show}>
                    <Menu>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/finalists" className="nav-link">
                            Finalists
                        </Link>
                        <Link href="/sponsor" className="nav-link">
                            Get Involved
                        </Link>
                    </Menu>

                    <Button url="/vote" title="Vote" />
                </Navbar>
                <MenuIcon>
                    {show ? (
                        <i
                            className="fas fa-close fa-2x"
                            onClick={() => setShow(false)}
                        ></i>
                    ) : (
                        <i
                            className="fas fa-bars fa-2x"
                            onClick={() => setShow(true)}
                        ></i>
                    )}
                </MenuIcon>
            </Nav>
        </Container>
    );
};

const Container = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 5rem;
    background-color: var(--secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1600px;
    margin: auto;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    height: 100%;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 100vh;
        background-color: var(--secondary);
        justify-content: center;
        left: ${(props) => (props.show ? 0 : -100)}%;
        position: absolute;
        top: 0;
        width: ${(props) => (props.show ? 100 : 0)}%;
    }
`;

const Logo = styled.img``;

const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-right: 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-right: 0;
    }
`;

const MenuIcon = styled.div`
    color: var(--white);
    opacity: 0.8;
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export default Header;
