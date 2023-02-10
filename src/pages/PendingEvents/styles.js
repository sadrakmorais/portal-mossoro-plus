import styled from 'styled-components';

export const Container = styled.main`
	background: linear-gradient(329.54deg, #cfcfcf 0%, white 100%);

	min-height: 100vh;
	display: inline;
	align-items: flex-start;
`;

export const CardContainer = styled.div`
	border-radius: 4px;
	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	width: 100%;
	padding: 10px;
	background: #e5ffff;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
		margin-bottom: 12px;
	}

	& form {
		width: 100%;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 70px;
	padding: 5px;
	text-align: center;
	font-size: 30px;
	font-weight: 300px;
`;
