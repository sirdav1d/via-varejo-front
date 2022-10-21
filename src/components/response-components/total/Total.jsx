import React, { useState, useEffect } from 'react';
import { ValueTotal, TagTotal, TitleTotal, ContainerTotal } from './style';
const Total = ({ value }) => {
	const [lucro, setLucro] = useState('');
	const isLucro = (value) => {
		if (value > 0) {
			return setLucro('(Lucro)');
		} else {
			return setLucro('(Prejuízo)');
		}
	};

	useEffect(() => {
		isLucro(value);
	}, [value]);

	return (
		<ContainerTotal>
			<TitleTotal>Total:</TitleTotal>
			<div>
				<ValueTotal>{value}</ValueTotal>
				<TagTotal>{lucro}</TagTotal>
			</div>
		</ContainerTotal>
	);
};

export default Total;
