import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	& > label {
		font-size: 15px;
		color: rgba(20, 20, 20, 0.8);
		font-weight: 500;
		margin-bottom: 4px;
	}

	& > input {
		width: 100%;
		padding: 6px;
		border-radius: 4px;
		outline: none;
		border: 1px solid #dedede;
        height: 38px;
        transition: 300ms;
		font-size: 15px;

		&:hover {
			border-color: #ccc;
		}

		&:focus {
			border-color: rgba(0, 116, 232);
			/* box-shadow: 0px 0px 0px 1px rgba(0, 116, 232, 0.5); */
            background: #f9f9f9;
		}
	}
`;
