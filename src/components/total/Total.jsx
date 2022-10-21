import React, { useState, useEffect } from 'react';
import { ValueTotal, TagTotal, TitleTotal, ContainerTotal } from './style';
import { formater } from '../../helpers/utils';
const Total = ({ value }) => {
	const [lucro, setLucro] = useState('');
	const isLucro = (value) => {
		if (value > 0) {
			return setLucro('(Lucro)');
		} else {
			return setLucro('(Prejuízo)');
		}
	};

	const resp = formater.format(value);

	useEffect(() => {
		isLucro(value);
	}, [value]);

	return (
		<ContainerTotal>
			<TitleTotal>Total:</TitleTotal>
			<div>
				<ValueTotal>{resp}</ValueTotal>
				<TagTotal>{lucro}</TagTotal>
			</div>
		</ContainerTotal>
	);
};

export default Total;
