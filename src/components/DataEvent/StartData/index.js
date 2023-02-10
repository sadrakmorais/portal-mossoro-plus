import React from 'react';
import { Container, DataContainer } from './styles';

const StartData = ({ children }) => {
	return (
		<Container>
			<span>Início:</span>
			<DataContainer>
				<span>{children}</span>
			</DataContainer>
		</Container>
	);
};

export default StartData;
