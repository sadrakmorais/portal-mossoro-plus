import styled, { css } from 'styled-components';

export const Container = styled.aside`
	flex: 0.2;
	background: linear-gradient(329.54deg, #20b6d1 0%, #00c7c7 100%);
	height: 100%;
	padding: 26px;
	border-right: 1px solid #ccc;
	display: flex;
	text-align: center;
	flex-direction: column;
	position: relative;
`;

export const Menu = styled.nav`
	width: 100%;
	margin-top: 48px;
`;

export const MenuLink = styled.li`
	border-radius: 4px;
	margin: 4px 0;
	transition: 100ms;
	display: flex;

	& > a {
		padding: 10px 12px;
		cursor: pointer;
		font-size: 17px;
		color: rgba(50, 50, 50);
		flex: 1;
		border-radius: 4px;
	}

	&:hover {
		background: #f3f3f3;
	}

	${({ active }) =>
		active &&
		css`
			& > a {
				background: rgba(0, 116, 232);
				color: #ffffff;
			}
		`}
`;

export const Exit = styled.button`
	position: absolute;
	bottom: 48px;
	left: 24px;
	padding: 10px 12px;
	cursor: pointer;
	font-size: 17px;
	color: rgba(50, 50, 50);
	flex: 1;
	border-radius: 4px;
	background: none;
	font-weight: 500;

	&:hover {
		background: #ccc;
	}
`;
