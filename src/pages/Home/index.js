import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard';
import { Container, Header, CardContainer } from './styles';

import { GET } from '../../services/api';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const { data } = await GET('/events?isAccepted=true');

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
			<Header>Eventos Diponíveis</Header>
			<CardContainer>

				<ul>
					{events.map((event) => {
						return <EventCard event={event} key={event._id} />;
					})}

				</ul>

			</CardContainer>

		</Container>
	);
};

export default Home;
