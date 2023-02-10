import React, { useEffect, useState, useContext } from 'react';
import MyEvents from '../../components/MyEvents';
import { Container, Header, CardContainer } from './styles';
import { GET } from '../../services/api';
import { AuthContext } from '../../store/Auth';

const Events = () => {
	const { user } = useContext(AuthContext); // user é quem ta logado
	const [loading, setLoading] = useState(true);
	const [subscriptions, setsubscriptions] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const { data } = await GET(`/subscriptions?user=${user._id}`);

				setsubscriptions(data.subscriptions);
                setLoading(false);
                console.log(data)
			} catch (error) {
				console.log(error);
			}
		};

		fetchEvents();
	}, [subscriptions, user._id]);

	if (loading) {
		return (
			<Container>
				<h1>Carregando...</h1>
			</Container>
		);
	}

	return (
		<Container>
			<Header>Minhas inscrições</Header>
			<CardContainer>
				<ul>
					{subscriptions.map((event) => {
						return <MyEvents event={event} key={event._id} />;
					})}
				</ul>
			</CardContainer>
		</Container>
	);
};

export default Events;
