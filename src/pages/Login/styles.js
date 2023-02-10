import styled from 'styled-components';
import img from '../../assets/backGround.png'

export const Container = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('${img}');
background-size: cover;
background-position: center;
`;

export const FormContainer = styled.div`
	border-radius: 4px;
	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	width: 500px;
	padding: 24px;
	background: #ffffff;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
        margin-bottom: 12px;
	}

	& form {
		width: 100%;
	}
`;

export const RememberMe = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 8px 0;

	& > label {
		font-size: 15px;
		color: rgba(20, 20, 20, 0.8);
		font-weight: 500;
		margin-left: 8px;
	}

	& > input {
		cursor: pointer;
	}
`;
