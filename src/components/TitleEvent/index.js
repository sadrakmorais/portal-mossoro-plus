import React from 'react';

import { Container, Titles } from './styles';

const TitleEvent = ({ children }) => {
	return (
		<Container>
			<Titles>
				<h1 width='100%'>{children}</h1>
			</Titles>
		</Container>
	);
};

export default TitleEvent;
