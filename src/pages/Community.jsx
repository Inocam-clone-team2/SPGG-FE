import React from "react";
import PostList from '../components/PostList';
import styled from 'styled-components';


const Community = () => {
	return (
		<Communitylayout>
			<header>
				header
			</header>

			<div>
				<PostList />
			</div>
		</ Communitylayout>
	);
};

const Communitylayout = styled.div`
background-color: #e8eaed;
`;

export default Community;
