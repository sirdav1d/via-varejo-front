import styled from 'styled-components';
import { Colors } from '../../GlobalStyle';

export const ContainerHeader = styled.div`
	height: 100px;
	width: 100%;
	background: linear-gradient(
		to right,
		${Colors.preto900},
		${Colors.blue500},
		${Colors.green500}
	);
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #f2f2f2;
	text-shadow: 0 0 8px black;

	h1 {
		font-size: 28px;
	}

	img {
		width: 100px;
		height: 60px;
		object-fit: contain;
	}

	@media screen and (max-width: 820px) {
		h1 {
			font-size: 20px;
		}

		img {
			width: 50px;
			height: 30px;
			object-fit: contain;
		}
	}
`;
