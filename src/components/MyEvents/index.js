import React, { useContext } from 'react';
import CapaEvent from '../CapaEvent';
import TitleEvent from '../TitleEvent';
import EndData from '../DataEvent/EndData';
import StartData from '../DataEvent/StartData';
import VacationEvent from '../VacationEvent';
import DescriptionEvent from '../DescriptionEvent';
import LocalizationEvent from '../Localization';

import {
	Container,
	FormContainer,
	InfoContainer,
	DataContainer,
	VacationsContainer,
	ContainerSubscribe,
	ContainerDescription,
	ContainerLocation,
	CapaContainer,
} from './styles';

const MyEvents = ({ event }) => {
	return (
		<Container>
			<FormContainer>
				<CapaContainer>
					<CapaEvent>
						{
							<a href={event.event.photo} target='_blank'>
								<img
									src={event.event.photo}
									alt='capa do evento'
									style={{ width: '100%', height: '25vh' }}
								/>
							</a>
						}
					</CapaEvent>
				</CapaContainer>
				<InfoContainer>
					<TitleEvent>{event.event.name}</TitleEvent>
					<ContainerDescription>
						<DescriptionEvent>{event.event.description}</DescriptionEvent>
					</ContainerDescription>
					<ContainerLocation>
						<span>Local:</span>
						<LocalizationEvent>{event.event.location}</LocalizationEvent>
					</ContainerLocation>
					<DataContainer>
						<StartData>{new Date(event.event.period.start).toLocaleDateString()}</StartData>
						<EndData>{new Date(event.event.period.end).toLocaleDateString()}</EndData>
						<ContainerSubscribe></ContainerSubscribe>
						<VacationsContainer>
							<VacationEvent>{event.event.vacancies}</VacationEvent>
						</VacationsContainer>
					</DataContainer>
				</InfoContainer>
			</FormContainer>
		</Container>
	);
};

export default MyEvents;
