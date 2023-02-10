import React, { useEffect, useState } from 'react';
import SolicitationEvent from '../../components/SolicitationEvent';
import { Container, Header, CardContainer } from './styles';
import { GET } from '../../services/api';



const PendingEvents = () => {
    const [loading, setLoading] = useState(true);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const { data } = await GET('/events?isAccepted=false');

				setEvents(data.events);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchEvents();
	}, []);

	if (loading) {
		return (
			<Container>
				<h1>Carregando...</h1>
			</Container>
		);
	}

	return (
		<Container>
			<Header>Solicitações de Eventos</Header>
			<CardContainer>

				<ul>
					{events.map((event) => {
						return <SolicitationEvent event={event} key={event._id}/>;
					})}

				</ul>
			</CardContainer>
		</Container>
	);
};


export default PendingEvents;
