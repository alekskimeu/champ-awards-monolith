import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import styled from "styled-components";
import Layout from "../components/admin/Layout";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Modal from "../components/admin/Modal";
import AwardForm from "../components/admin/AwardForm";
import Loader from "../components/common/Loader";
import Award from "../components/admin/Award";

const Awards = ({ subcategories, participants, categories }) => {
    const [search, setSearch] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    return (
        <>
            <Head title="Awards" />
            <Layout>
                <Content>
                    <CardsHeader>
                        <Title>Awards</Title>
                        <Search>
                            <SearchRoundedIcon />
                            <Input
                                type="search"
                                placeholder="Search Awards"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Search>
                        <Button onClick={showModal}>New Award</Button>
                    </CardsHeader>
                    <Cards>
                        {subcategories &&
                            subcategories
                                .filter((subcategory) =>
                                    subcategory.name
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                )
                                .map((subcategory) => (
                                    <Award
                                        subcategory={subcategory}
                                        key={subcategory.id}
                                        participants={participants}
                                        categories={categories}
                                    />
                                ))}
                    </Cards>

                    <Modal
                        show={show}
                        handleClose={handleClose}
                        title="Add Award"
                    >
                        <AwardForm
                            setShow={setShow}
                            categories={categories}
                            subcategories={subcategories}
                        />
                    </Modal>
                </Content>
            </Layout>
        </>
    );
};

const Content = styled.div`
    padding: 1rem 3rem;
    top: 12rem;
    width: 100%;
`;

const Cards = styled.div`
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

const CardsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
`;

const Title = styled.h2`
    color: var(--white);
    opacity: 0.9;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    width: fit-content;
    margin-top: 0.5rem;
    padding: 0.9rem;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.3rem;
    color: var(--white);
    background-color: var(--secondary);
    transition: all 0.5s ease;

    &:hover {
        opacity: calc() 0.9;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: #e9e9e9;
    width: 30vw;
    border-radius: 0.5rem;
    padding-left: 0.8rem;
`;

const Input = styled.input`
    background-color: #e9e9e9;
    width: 100%;
    border: none;
    padding: 0.9rem;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
`;

export default Awards;
