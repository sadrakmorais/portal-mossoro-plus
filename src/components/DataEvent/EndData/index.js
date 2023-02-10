import React from 'react'
import {Container,DataContainer} from './styles';


const EndData = ({children}) =>{

    return (
		<Container>
			<span>Fim:</span>
			<DataContainer>
				<span>{children}</span>
			</DataContainer>
		</Container>
	);
};


export default EndData
