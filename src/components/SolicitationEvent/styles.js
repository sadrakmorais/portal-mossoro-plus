import styled from 'styled-components';

export const Container = styled.div`
	margin-bottom: 5px;
	width: 100%;
	height: 100%;
	display: flex;
    border-radius: 4px;
	align-items: flex-start;
	justify-content: initial;
	background: white;
	&:hover {
		box-shadow: 0px 1px 2px 3px rgba(0, 0, 139, 0.2);
	}
`;
export const FormContainer = styled.div`
	width: 100%;
	align-items: flex-start;
	padding: 5px;
	display: flex;
	margin: 3px;
	background: white;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
		margin-bottom: 12px;
	}

	& form {
		width: 100%;
	}
`;
export const CapaContainer = styled.div`
	height: 100%;
	width: 30%;
	max-height: 500px;
`;
export const InfoContainer = styled.div`
	height: 20%;
	width: 100%;
	padding: 5px;
	display: inline;
	background: white;
`;
export const ContainerDescription = styled.div`
	width: 100%;
	height: 100px;
	border-radius: 1px;
	word-wrap: break-word;
	background: white;
	&:hover {
		box-shadow: 0px 1px 1px 1px rgba(100, 100, 100, 0.2);
	}
`;
export const ContainerLocation = styled.div`
	margin-top: 2%;
	padding: 2px;
	width: 100%;
	height: 30px;
	display: flex;
	word-wrap: break-word;
`;

export const FooterCointainer = styled.div`
	width: 100%;

	margin-top: 2%;
	display: flex;

    align-content:space-around;
`;
export const DataContainer = styled.div`
	display: flex;
    height:90%;
`;

export const ContainerSubscribe = styled.div`
	padding-top: 2px;
    height:90%;
	margin-top: 1px;
	margin-left: 20%;
	width: 200px;
	display: flex;


`;

export const VacationsContainer = styled.div`
	display: flex;
    margin-left:60px;
    width:100px;
	align-items:flex-end;
	padding-top: 1%;

`;

