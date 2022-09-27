import React from "react";

import styled from "styled-components";

const Package = ({ item }) => {
    return (
        <Container>
            <Header>
                <Title>{item.title}</Title>
                <Amount>{item.amount}</Amount>
            </Header>
            <Content>
                <Benefits>
                    {item.benefits.map((benefit) => (
                        <Benefit>{benefit}</Benefit>
                    ))}
                </Benefits>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    border: 2px solid var(--primary);
    border-radius: 0.3rem;
    box-shadow: 4px 8px 24px rgba(231, 231, 231);
`;

const Header = styled.div`
    background-color: var(--primary);
    padding: 0.5rem 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

const Title = styled.h3`
    color: var(--white);
    font-size: 1.3rem;
`;

const Amount = styled.h4`
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 0.35rem 1rem 0.2rem 1rem;
`;

const Content = styled.div`
    padding: 1.5rem 2rem;
`;

const Benefits = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Benefit = styled.li`
    font-size: 1.2rem;
`;

export default Package;
