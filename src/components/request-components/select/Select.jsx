import React from 'react';
import { SelectPattern, ContainerSelect } from './style';
const Select = ({ selectChange, selectValue }) => {
	return (
		<ContainerSelect>
			<label htmlFor='operation'>Operação:</label>
			<SelectPattern
				id='operation'
				onChange={selectChange}
				defaultValue={selectValue}
				required>
				<option id='compra'>Compra</option>
				<option id='venda'>Venda</option>
			</SelectPattern>
		</ContainerSelect>
	);
};

export default Select;
