import React from 'react';
import { ContainerOperador } from './style';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { formater } from '../../helpers/utils';

const Operador = ({ nome, transacao, valor }) => {
	const isIcon = () => {
		if (transacao === 'Venda') {
			transacao = <FaPlus />;
		} else {
			transacao = <FaMinus />;
			valor = Number(valor) * -1;
		}
	};

	const resp = formater.format(valor);

	return (
		<ContainerOperador>
			{isIcon()}
			<ul>
				<li>{transacao}</li>
				<li>{nome}</li>
				<li>{resp}</li>
			</ul>
		</ContainerOperador>
	);
};

export default Operador;
