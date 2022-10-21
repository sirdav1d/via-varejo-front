import React from 'react';
import { ContainerInput } from './style';

const InputPattern = ({ modo, inputChange, inputValue, enter }) => {
	return (
		<ContainerInput>
			<label htmlFor={modo.nome}>{modo.nome}</label>
			<input
				name={modo.nome}
				onChange={inputChange}
				type={modo.tipo}
				id={modo.nome}
				value={inputValue}
				placeholder={modo.placeholder}
				required={true}
				onKeyUp={enter}
			/>
		</ContainerInput>
	);
};

export default InputPattern;
