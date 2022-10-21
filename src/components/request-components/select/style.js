import styled from 'styled-components';
import { Colors } from '../../../GlobalStyle';

export const ContainerSelect = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

    label{
        font-size: 12px;
    }

`;

export const SelectPattern = styled.select`
    width: 100%;
    background-color: ${Colors.preto900};
    color: #f2f2f2;
    padding: 8px;
    border-radius: 4px;
    margin-top: 4px;

`