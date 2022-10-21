import React from 'react';
import { ContainerHeader } from './style';
import {FiMenu} from 'react-icons/fi'
import logo from '../../assets/via-logo.svg';
const Header = () => {
	return <ContainerHeader>
        <div>
            <img src={logo} alt="logo Via Varejo" />
        </div>
        <h1>
            Controle Financeiro
        </h1>
        <FiMenu size={35}/>
    </ContainerHeader>;
};

export default Header;
