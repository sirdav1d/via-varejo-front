import styled from 'styled-components';
import { Colors } from '../../../GlobalStyle';


export const ContainerButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100%;


	button {
		width: 100%;
		max-width: 180px;
		padding: 8px 12px;
		background-color: ${Colors.preto900};
		color: #f2f2f2;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		margin: 0 auto;

		:hover {
			background-color: ${Colors.preto400};
			opacity: 0.9;
		}
	}
`;