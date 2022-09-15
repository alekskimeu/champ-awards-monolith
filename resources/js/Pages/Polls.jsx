import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/inertia-react";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styled from "styled-components";
import Card from "../components/client/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import image from "../assets/header.jpg";

import Loader from "../components/common/Loader";
import { Inertia } from "@inertiajs/inertia";
import Countdown from "../components/client/Countdown";

const Polls = ({ participants, categories, category, subcategories }) => {
    const { flash } = usePage().props;

    const [search, setSearch] = useState("");
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
                <title>Champ Awards</title>
                <meta
                    name="description"
                    content="Vote for Champ Awards finalists"
                />
            </Head>
            <Container>
                {flash.message && <Message>{flash.message}</Message>}
                <Wrapper>
                    <Header>
                        <Left>
                            <Title>Champ Awards</Title>
                        </Left>
                        <Countdown />
                    </Header>

                    <PollContainer>
                        <Subtitle>Vote for your favorite contestant</Subtitle>
                        <HeaderWrapper>
                            <Categories>
                                {categories.map((category) => (
                                    <Category key={category.id}>
                                        {category.name}
                                    </Category>
                                ))}
                            </Categories>
                            <Search>
                                <SearchRoundedIcon />
                                <Input
                                    type="search"
                                    placeholder="Search"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Search>
                            <Select onChange={filterSubcategories}>
                                <Option
                                    style={{ backgroundColor: "white" }}
                                    value={0}
                                >
                                    All
                                </Option>
                                {subcategories.map((subcategory) => (
                                    <Option
                                        style={{ backgroundColor: "white" }}
                                        key={subcategory.id}
                                        value={subcategory.id}
                                    >
                                        {subcategory.name}
                                    </Option>
                                ))}
                            </Select>
                        </HeaderWrapper>
                        <Cards>
                            {users ? (
                                users
                                    .filter((user) =>
                                        user.firstName
                                            .concat(user.lastName)
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    )
                                    .map((user) => (
                                        <Card
                                            user={user}
                                            key={user.index}
                                            category={subcategories.filter(
                                                (subcategory) =>
                                                    subcategory.id ===
                                                    user.award_id
                                            )}
                                        />
                                    ))
                            ) : (
                                <Loader />
                            )}
                        </Cards>
                    </PollContainer>
                </Wrapper>
            </Container>
        </>
    );
};

const Container = styled.div`
    padding: 3rem 1rem;
    min-height: 100vh;
    position: relative;

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

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(231, 231, 231, 0.2);

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
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

const Input = styled.input`
    padding: 0.7rem 0.8rem;
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-left: 0.4rem;
`;

const Cards = styled.div`
    width: 100%;
    top: 12rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export default Polls;
