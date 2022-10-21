import styled from 'styled-components';
import { Colors } from '../../GlobalStyle';

export const ContainerResponse = styled.div`
	width: 60%;
	margin: 0 auto;
	color: black;
	height: 100%;

	@media screen and (max-width: 780px) {
		width: 80%;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		margin-top: 8px;
	}

	div > h4 {
		font-size: 12px;
		margin: 16px 16px 0;
	}
`;
export const TitleResponse = styled.h3`
	font-size: 20px;
	text-align: center;
`;

export const ResponseContent = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 2px solid ${Colors.preto400};
	border-bottom: 4px double ${Colors.preto400};
`;
