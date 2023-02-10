import React from 'react';

import { PATCH, DELETE } from '../../services/api';
import CapaEvent from '../CapaEvent';
import TitleEvent from '../TitleEvent';
import EndData from '../DataEvent/EndData';
import StartData from '../DataEvent/StartData';
import VacationEvent from '../VacationEvent';
import DescriptionEvent from '../DescriptionEvent';
import LocalizationEvent from '../Localization';
import Button from '../Button';

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
	FooterCointainer,
} from './styles';

const SolicitationEvent = ({ event }) => {
	const handleAcceptEvent = async () => {
		try {
			const payload = { isAccepted: true };
			const {
				data: { event: newEvent },
			} = await PATCH(`/events/${event._id}`, payload);
			alert('Evento Aceito');
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteEvent = async () => {
		try {
			const {
				data: { event: newEvent },
			} = await DELETE(`/events/${event._id}`);
			alert('Evento Recusado');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<FormContainer>
				<CapaContainer>
					<CapaEvent>
						{
							<a href={event.photo} target='_blank'>
								<img
									src={event.photo}
									alt='capa do evento'
									style={{ width: '100%', height: '25vh' }}
								/>
							</a>
						}
					</CapaEvent>
				</CapaContainer>
				<InfoContainer>
					<TitleEvent>{event.name}</TitleEvent>
					<ContainerDescription>
						<DescriptionEvent>{event.description}</DescriptionEvent>
					</ContainerDescription>
					<ContainerLocation>
						<span>Local:</span>
						<LocalizationEvent>{event.location}</LocalizationEvent>
					</ContainerLocation>
					<FooterCointainer>
						<DataContainer>
							<StartData>
								{new Date(event.period.start).toLocaleDateString()}
							</StartData>
							<EndData>{new Date(event.period.end).toLocaleDateString()}</EndData>
						</DataContainer>
						<ContainerSubscribe>
							<Button
								style={{ background: ' #3498DB', width: '130%' }}
								onClick={handleAcceptEvent}>
								Aprovar Evento
							</Button>

							<Button
								style={{ background: ' #FF0000', width: '60%', marginLeft: '15px' }}
								onClick={handleDeleteEvent}>
								X
							</Button>
						</ContainerSubscribe>
						<VacationsContainer>
							<VacationEvent>{event.vacancies}</VacationEvent>
						</VacationsContainer>
					</FooterCointainer>
				</InfoContainer>
			</FormContainer>
		</Container>
	);
};

export default SolicitationEvent;
