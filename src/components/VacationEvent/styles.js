import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 2px;
	height: 100%;
`;
export const VacationContainer = styled.div`
	font-size: 18px;
	font-weight: 700;
	color: white;
	border: 1px solid;
	border-radius: 5px;
	padding: 1px;
	background: #3498db;
	text-align: center;
	&:hover {
		box-shadow: 0px 1px 2px 3px rgba(0, 0, 139, 0.2);
	}
`;
