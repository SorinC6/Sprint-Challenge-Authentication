import React from 'react';
import styled from 'styled-components';

const Joke = ({ joke }) => {
	return (
		<Wrapper>
			<p>{joke}</p>
		</Wrapper>
	);
};

export default Joke;

const Wrapper = styled.div`
	padding: 5px 12px;
	margin: 10px 0;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	transition: 0.25s ease-in-out;

	img {
		max-width: 250px;
	}

	&:hover {
		transform: scale(1.02);
		transition: 0.25s ease-in-out;
	}
`;
