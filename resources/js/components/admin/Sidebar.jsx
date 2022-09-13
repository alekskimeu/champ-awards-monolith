import React from "react";
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";
import { Link } from '@inertiajs/inertia-react'

import LogoutIcon from "@mui/icons-material/Logout";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from '@mui/icons-material/Layers';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';


const Sidebar = () => {
	const handleLogout = () => {
		Inertia.post('/admin/logout');
	}

	return (
        <Container>
            <Logo>Champ Awards</Logo>
            <Title>Menu</Title>
            <Menu>
                <Links>
                    <Link className="sidebar-link" href="/admin">
                        <DashboardIcon style={{ opacity: 0.8 }} />
                        Dashboard
                    </Link>
                    <Link className="sidebar-link" href="/schools">
                        <SchoolIcon style={{ opacity: 0.8 }} />
                        Schools
                    </Link>
                    <Link className="sidebar-link" href="/categories">
                        <LayersIcon style={{ opacity: 0.8 }} />
                        Categories
                    </Link>
                    <Link className="sidebar-link" href="/subcategories">
                        <CategoryIcon style={{ opacity: 0.8 }} />
                        Subcategories
                    </Link>
                    <Link className="sidebar-link" href="/participants">
                        <GroupIcon style={{ opacity: 0.8 }} />
                        Participants
                    </Link>
                </Links>
                <Button onClick={handleLogout}>
                    Logout <LogoutIcon />
                </Button>
            </Menu>
        </Container>
    );
};

const Container = styled.div`
    flex: 0.5;
    padding: 1.5rem 2rem 3rem 2rem;
    height: 100vh;
    background-color: var(--primary-bg);
    position: fixed;
    left: 0;
    min-width: 15vw;
`;

const Logo = styled.h1`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`;

const Title = styled.h1`
	font-size: 1.3rem;
	margin-bottom: 1rem;
	color: var(--white);
`;

const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

const Button = styled.button`
	border: none;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	width: fit-content;
	margin-top: 0.5rem;
	padding: 0.8rem 2rem;
	font-weight: 500;
	font-size: 1rem;
	border-radius: 2rem;
	color: var(--white);
	background-color: var(--danger);
	transition: all 0.5s ease;

	&:hover {
		opacity: 0.8;
	}
`;

export default Sidebar;
