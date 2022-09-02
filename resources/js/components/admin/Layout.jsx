import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
	return (
		<Container>
			<Sidebar />
			<Main>
				<Header />
				<Content>{children}</Content>
			</Main>
		</Container>
	);
};

const Container = styled.div``;

const Main = styled.div`
    display: flex;
`;

const Content = styled.div`
	padding-top: 6rem;
	margin-left: 15vw;
	flex: 1;
`;

export default Layout;
