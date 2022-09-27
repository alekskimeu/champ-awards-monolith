import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { Head } from "@inertiajs/inertia-react";

import logo from "../../assets/logo.png";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href={logo} />
            </Head>
            <Container>
                <Wrapper>
                    <Header />
                    {children}
                </Wrapper>
                <Footer />
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    padding-bottom: 3rem;
`;

export default Layout;
