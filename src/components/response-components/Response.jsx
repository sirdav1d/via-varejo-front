import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import uuid from 'react-uuid';
import Operador from './operador/Operador';
import { TitleResponse, ContainerResponse, ResponseContent } from './style';
import Total from './total/Total';

export function Response({ lista }) {
	const [sum, setSum] = useState();

	const name = (lista) => {
		let resp = 0;
		let venda = 0;
		let compra = 0;

		for (let i = 0; i < lista.length; i++) {
			

			if (lista[i].transacao === 'Compra') {
				venda += Number(lista[i].valor * -1);
				console.log(lista[i].transacao, venda);
			}

			if (lista[i].transacao === 'Venda') {
				compra += Number(lista[i].valor * 1);
				console.log(lista[i].transacao, compra);
			}

			resp = compra+venda;
			// console.log(lista[i], resp);
			setSum(resp);
		}
	};

	useEffect(() => {
		name(lista);
	}, [lista]);

	return (
		<ContainerResponse>
			<TitleResponse>Extrato de Transações</TitleResponse>
			<div>
				<h4>Mercadoria</h4>
				<h4>Valor</h4>
			</div>
			<ResponseContent>
				{lista.map((job) => {
					return (
						<Operador
							key={uuid()}
							nome={job.nome}
							valor={job.valor}
							transacao={job.transacao}
						/>
					);
				})}
			</ResponseContent>
			<Total value={sum} />
		</ContainerResponse>
	);
}

export default Response;
