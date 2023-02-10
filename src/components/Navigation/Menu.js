import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu as Container, MenuLink, Exit } from './styles';

import { AuthContext } from '../../store/Auth';

const Menu = () => {
	const { pathname } = useLocation(); /** URL atual do navegador */
	const { user, signOut } = useContext(AuthContext);

	if (user.level === 0) {
		/** rotas admin */

		return (
			<Container>
				<ul>
					<MenuLink active={pathname === '/home'}>
						<Link to='/home'>Início</Link>
					</MenuLink>
					<MenuLink active={pathname === '/events'}>
						<Link to='/events'>Inscrições</Link>
					</MenuLink>
					<MenuLink active={pathname === '/events/submit'}>
						<Link to='/events/submit'>Submeter Evento</Link>
					</MenuLink>
					<MenuLink active={pathname === '/events/pending'}>
						<Link to='/events/pending'>Eventos Pendentes</Link>
					</MenuLink>
				</ul>
				<Exit onClick={signOut} exit>
					Sair
				</Exit>
			</Container>
		);
	}
	if (user.level === null) {
		return (
			<Container>
				<ul>
					<MenuLink active={pathname === '/home'}>
						<Link to='/home'>Início</Link>
					</MenuLink>
					<MenuLink active={pathname === '/events'}>
						<Link to='/events'>Inscrições</Link>
					</MenuLink>
					<MenuLink active={pathname === '/events/submit'}>
						<Link to='/events/events'>Submeter Evento</Link>
					</MenuLink>
				</ul>
				<Exit onClick={signOut} exit>
					Sair
				</Exit>
			</Container>
		);
	}

	/** usuário comum */
	return (
		<Container>
			<ul>
				<MenuLink active={pathname === '/home'}>
					<Link to='/home'>Início</Link>
				</MenuLink>
				<MenuLink active={pathname === '/events'}>
					<Link to='/events'>Inscrições</Link>
				</MenuLink>
				<MenuLink active={pathname === '/events/submit'}>
					<Link to='/events/submit'>Submeter Evento</Link>
				</MenuLink>
			</ul>
			<Exit onClick={signOut} exit>
				Sair
			</Exit>
		</Container>
	);
};

export default Menu;
