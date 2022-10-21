import React from 'react';
import { ContainerButton } from './style.js';
const Button = (props) => {
	return (
		<ContainerButton>
			<button
				onClick={props.click}
				type='button'>
				{props.children}
			</button>
		</ContainerButton>
	);
};

export default Button;
