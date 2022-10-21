import React, { useEffect, useState } from 'react';
import { ContainerRequest } from './style';
import InputPattern from './input/Input';
import Select from './select/Select';
import Button from './button/Button';
import Response from '../response-components/Response';

const Request = () => {
	const [job, setJob] = useState({ transacao: 'Compra', nome: '', valor: '' });
	const [listJob, setListJob] = useState(response());
	const [canShow, setCanShow] = useState(false || show());

	function response() {
		const resp = JSON.parse(localStorage.getItem('all_jobs'));
		if (localStorage.getItem('all_jobs') === null) {
			return [];
		} else {
			return resp;
		}
	}

	function show() {
		if (listJob !== null) {
			return true;
		} else {
			return false;
		}
	}

	const operations = {
		mercadoria: {
			nome: 'Nome da Mercadoria:',
			placeholder: 'Digite o nome da mercadoria',
			tipo: 'text',
		},
		valor: {
			nome: 'Valor da Transação:',
			placeholder: 'R$00,00',
			tipo: 'number',
		},
	};

	function nameChange(e) {
		setJob({ ...job, nome: e.target.value });
	}

	function valorChange(e) {
		setJob({ ...job, valor: e.target.value });
	}

	function transChange(e) {
		setJob({ ...job, transacao: e.target.value });
	}

	function handleSubmit() {
		if (!job.nome || !job.valor || !job.transacao) {
			window.alert('Preencha todos os campos!');
			setJob({ transacao: '', nome: '', valor: '' });
			return;
		} else {
			setListJob([...listJob, job]);
			setJob({ transacao: job.transacao, nome: '', valor: '' });
			setCanShow(true);
		}
	}

	function deleteSubmit() {
		setListJob([]);
		setCanShow(false);
	}

	function enterAdd(e) {
		e.preventDefault();
		const resp = e.code;
		if (resp === 'Enter') {
			return handleSubmit();
		}
	}

	useEffect(() => {
		const resp = JSON.parse(localStorage.getItem('all_jobs'));
		if (localStorage.getItem('all_jobs') !== null) {
			setListJob(resp);
		} else {
			setCanShow(false);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('all_jobs', JSON.stringify(listJob));
	}, [listJob]);

	console.log(listJob);
	console.log(canShow);
	return (
		<>
			<ContainerRequest>
				<div>
					<Select
						selectChange={transChange}
						selectValue={job.transacao}
					/>
					<InputPattern
						inputChange={nameChange}
						modo={operations.mercadoria}
						inputValue={job.nome}
					/>
					<InputPattern
						inputChange={valorChange}
						modo={operations.valor}
						inputValue={job.valor}
						enter={enterAdd}
					/>
				</div>
				<div>
					<Button click={handleSubmit}>Adicionar Transação</Button>
					<Button click={deleteSubmit}>Apagar Transações</Button>
				</div>
			</ContainerRequest>

			{canShow && <Response lista={listJob} />}
		</>
	);
};

export default Request;
