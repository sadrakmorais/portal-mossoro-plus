import React from 'react';
import { Container, VacationContainer } from './styles';

const VacationEvent = ({ children }) => {
	return (
		<Container>
			<span>Vagas:</span>
			<VacationContainer>
				<span>{children}</span>
			</VacationContainer>
		</Container>
	);
};

export default VacationEvent;
