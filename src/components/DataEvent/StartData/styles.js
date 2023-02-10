import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 2px;
	height: 100%;
`;
export const DataContainer = styled.div`
	font-size: 18px;
	font-weight: 700;
	color: white;
	border: 1px solid;
	text-align: center;
	border-radius: 3px;
	padding: 1px;
	background: #3498db;
	&:hover {
		box-shadow: 0px 1px 2px 3px rgba(0, 0, 139, 0.2);
	}
`;
