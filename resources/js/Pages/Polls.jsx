import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import styled from "styled-components";
import Card from "../components/client/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import image from "../assets/header.jpg";
import year from "../assets/year.png";

import Loader from "../components/common/Loader";
import { Inertia } from "@inertiajs/inertia";
import Countdown from "../components/client/Countdown";

const Polls = ({ participants, categories, category, error }) => {
    console.log(error);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(participants);

    const filterCategories = (e) => {
        const id = e.target.value;
        if (id === 0) {
            console.log("All");
            return;
        } else {
            console.log("Some");
            setUsers(participants.filter((user) => user.category_id === id));
        }
    };

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Left>
                        <Title>Champ Awards</Title>
                        <Year src={year} width="50" />
                    </Left>
                    <Countdown />
                </Header>

                <PollContainer>
                    <Subtitle>Vote for your favorite contestant</Subtitle>
                    <HeaderWrapper>
                        <Category>All</Category>
                        <Search>
                            <SearchRoundedIcon />
                            <Input
                                type="search"
                                placeholder="Search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Search>
                        <Select onChange={filterCategories}>
                            <Option
                                style={{ backgroundColor: "white" }}
                                value={0}
                            >
                                All
                            </Option>
                            {categories.map((category) => (
                                <Option
                                    style={{ backgroundColor: "white" }}
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </Option>
                            ))}
                        </Select>
                    </HeaderWrapper>
                    <Cards>
                        {users.length > 0 ? (
                            users
                                .filter(
                                    (user) =>
                                        user.firstName.includes(search) ||
                                        user.lastName.includes(search)
                                )
                                .map((user) => (
                                    <Card
                                        user={user}
                                        key={user.index}
                                        category={categories.filter(
                                            (category) =>
                                                category.id === user.category_id
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

const Wrapper = styled.div`
    max-width: 1360px;
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
`;

const Category = styled.h2`
    color: var(--white);
    opacity: 0.8;

    @media screen and (max-width: 624px) {
        display: none;
    }
`;

const Select = styled.select`
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-weight: 600;
`;

const Option = styled.option`
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-weight: 600;
`;

const Year = styled.img``;

const Subtitle = styled.h2`
    width: fit-content;
    font-size: 1.4rem;
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
