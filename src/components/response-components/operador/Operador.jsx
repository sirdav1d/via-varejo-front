import React, { useEffect, useState } from 'react';
import { ContainerOperador } from './style';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Operador = ({ nome, transacao, valor }) => {
	

	
	const isIcon = () => {
		if (transacao === 'Venda') {
			transacao = <FaPlus />;
		} else {
			transacao = <FaMinus />;
			valor = Number(valor) * -1;
		}
	};

	return (
		<ContainerOperador>
			{isIcon()}
			<ul>
				<li>{transacao}</li>
				<li>{nome}</li>
				<li>{valor}</li>
			</ul>
		</ContainerOperador>
	);
};

export default Operador;
