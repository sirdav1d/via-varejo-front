import styled from 'styled-components';
import { Colors } from '../../GlobalStyle';

export const ContainerRequest = styled.div`
	width: 65%;
	margin: 40px auto 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 8px;
	border-bottom: 2px solid ${Colors.preto400};

	> div {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-bottom: 20px;
		gap: 12px;
	}

	@media screen and (max-width: 780px) {
		width: 80%;

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
`;
