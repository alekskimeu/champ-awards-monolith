import React, { useState } from "react";
import Countdown from "../components/client/Countdown";
import { Head } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

import { Link } from "@inertiajs/inertia-react";

import styled from "styled-components";

import image from "../assets/header.webp";
import logo from "../assets/logo.png";
import AwardsCategories from "../components/client/AwardsCategories";
import Header from "../components/client/Header";

const Finalists = ({ categories, awards, participants }) => {
    const { flash } = usePage().props;
    const [users, setUsers] = useState(participants);

    const filterSubcategories = (e) => {
        const id = e.target.value;

        if (id === "0") {
            setUsers(participants);
        } else {
            setUsers(participants.filter((user) => user.award_id === +id));
        }
    };

    return (
        <>
            <Head>
                <title>Finalists</title>
                <meta name="description" content="Champ Awards finalists" />
            </Head>
            <Header />
            <Container>
                <Wrapper>
                    <PollContainer>
                        <HeaderWrapper>
                            <Categories>
                                {categories.map((category) => (
                                    <Category key={category.id}>
                                        {category.name}
                                    </Category>
                                ))}
                            </Categories>
                            <Select onChange={filterSubcategories}>
                                <Option
                                    style={{ backgroundColor: "white" }}
                                    value={0}
                                >
                                    All
                                </Option>
                                {awards.map((award) => (
                                    <Option
                                        style={{ backgroundColor: "white" }}
                                        key={award.id}
                                        value={award.id}
                                    >
                                        {award.name}
                                    </Option>
                                ))}
                            </Select>
                        </HeaderWrapper>
                        <CardsWrapper>
                            {categories.map((category) => (
                                <AwardsCategories
                                    key={category.id}
                                    category={category}
                                    awards={awards.filter(
                                        (award) =>
                                            category.id === award.category_id
                                    )}
                                    participants={users}
                                />
                            ))}
                        </CardsWrapper>
                    </PollContainer>
                </Wrapper>
            </Container>
        </>
    );
};

const Container = styled.div`
    padding: 8rem 1rem;
    min-height: 100vh;
    position: relative;
    background-color: var(--secondary);

    &::after {
        position: absolute;
        content: "";
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.9)
            ),
            url(${image});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
`;

const Logo = styled.img``;

const Message = styled.div`
    letter-spacing: 1.8px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: var(--primary);
    color: var(--white);
    padding: 0.3rem 0.8rem;
    font-weight: 600;
    border-radius: 0.1rem;
    transition: all 0.5s ease;
`;

const Wrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 500px) {
        justify-content: center;
    }
`;

const Categories = styled.div`
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 624px) {
        display: none;
    }
`;

const Category = styled.h2`
    opacity: 0.8;
    font-size: 0.9rem;
    border: 1px solid var(--primary);
    color: var(--primary);
    font-weight: 600;
    padding: 0.3rem 2rem;
    border-radius: 5rem;
    transition: all 0.5s ease;

    &:hover {
        opacity: 1;
    }
`;

const Select = styled.select`
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const Option = styled.option`
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-weight: 600;
`;

const Subtitle = styled.h2`
    width: fit-content;
    font-size: 1.2rem;
    opacity: 0.7;
    color: var(--white);
    text-align: center;
    margin: 0 auto 1rem auto;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid rgba(231, 231, 231, 0.2);
`;

const PollContainer = styled.div`
    margin-top: 2rem;
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e9e9;
    min-width: 20vw;
    border-radius: 0.3rem;
    padding-left: 0.5rem;
`;

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

export default Finalists;
