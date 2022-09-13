import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Link } from '@inertiajs/inertia-react'
import styled from "styled-components";
import Layout from "../components/admin/Layout";
import Participant from "../components/admin/Participant";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Category from "../components/admin/Category";
import School from "../components/admin/School";
import Subcategory from "../components/admin/Subcategory";

const Dashboard = ({ participants, categories, subcategories, schools }) => {
    const [search, setSearch] = useState("");

    const handleClose = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
    };

    return (
        <>
            <Head title="Dashboard" />
            <Layout>
                <Content>
                    <EventsContainer>
                        <SectionHeader>
                            <Title>Top Categories</Title>
                            <Link href="/categories" className="header-nav">
                                All Categories
                            </Link>
                        </SectionHeader>
                        <Cards>
                            {categories &&
                                categories
                                    .filter((category) =>
                                        category.name.includes(search)
                                    )
                                    .slice(0, 3)
                                    .map((category) => (
                                        <Category
                                            category={category}
                                            key={category.id}
                                        />
                                    ))}
                        </Cards>
                    </EventsContainer>

                    <EventsContainer>
                        <SectionHeader>
                            <Title>Top Schools</Title>
                            <Link href="/schools" className="header-nav">
                                All Schools
                            </Link>
                        </SectionHeader>
                        <Cards>
                            {schools &&
                                schools
                                    .filter((school) =>
                                        school.name.includes(search)
                                    )
                                    .slice(0, 3)
                                    .map((school) => (
                                        <School
                                            school={school}
                                            key={school.id}
                                        />
                                    ))}
                        </Cards>
                    </EventsContainer>

                    <EventsContainer>
                        <SectionHeader>
                            <Title>Top Subcategories</Title>
                            <Link href="/subcategories" className="header-nav">
                                All Subcategories
                            </Link>
                        </SectionHeader>
                        <Cards>
                            {subcategories &&
                                subcategories
                                    .filter((subcategory) =>
                                        subcategory.name.includes(search)
                                    )
                                    .slice(0, 3)
                                    .map((subcategory) => (
                                        <Subcategory
                                            subcategory={subcategory}
                                            key={subcategory.id}
                                            participants={participants}
                                            categories={categories}
                                        />
                                    ))}
                        </Cards>
                    </EventsContainer>
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

const EventsContainer = styled.div`
	margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
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

const Title = styled.h2`
	font-size: 1.2rem;
    color: var(--white);
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
	background-color: var(--primary);
	transition: all 0.5s ease;

	&:hover {
		opacity: calc() 0.9;
	}
`;

export default Dashboard;
