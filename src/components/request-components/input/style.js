import styled from 'styled-components';
import { Colors } from '../../../GlobalStyle';

export const ContainerInput = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	label {
		font-weight: lighter;
		font-size: 12px;
	}

	input {
		width: 100%;
		min-width: 180px;
		border: 1px solid ${Colors.cinza300};
		border-radius: 4px;
		padding: 8px;
		margin-top: 4px;
		font-size: 12px;

		:focus {
			outline: 2px solid ${Colors.green500};
		}
	}
`;
