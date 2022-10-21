import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
		font-family: 'Lato', sans-serif;
	}
`;

export const Colors = {
	blue500: '#3e7fc2',
	blue700: '#584ee7',
	green500: '#35b09f',
	green300: '#96d3d8',
	purple300: '#ac94fc',
	cinza500: '#D9D9D9',
	cinza300: '#6A6A6A',
	preto400: '#262626',
	preto900: '#000000',
};

export const GeneralContainer = styled.div`
	min-height: 100vh;
	height: 100%;
	max-width: 100vw;
`;
