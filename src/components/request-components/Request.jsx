import React, { useEffect, useState } from 'react';
import { ContainerRequest } from './style';
import InputPattern from './input/Input';
import Select from './select/Select';
import Button from './button/Button';
import Response from '../response-components/Response';
import { response, operations, formater } from '../../helpers/utils';

const Request = () => {
	const [job, setJob] = useState({ transacao: 'Compra', nome: '', valor: '' });
	const [listJob, setListJob] = useState(response());
	const [canShow, setCanShow] = useState(show());

	response();

	function show() {
		if (listJob.length === 0) {
			return false;
		} else {
			return true;
		}
	}

	function nameChange(e) {
		setJob({ ...job, nome: e.target.value });
	}

	function valorChange(e) {
		const resp = e.target.value;
		setJob({ ...job, valor: resp });
	}

	function transChange(e) {
		setJob({ ...job, transacao: e.target.value });
	}

	function handleSubmit() {
		if (!job.nome || !job.valor || !job.transacao) {
			window.alert('Preencha todos os campos!');
			setJob({ transacao: job.transacao, nome: '', valor: '' });
			return;
		} else {
			setCanShow(true);
			setListJob([...listJob, job]);
			setJob({ transacao: job.transacao, nome: '', valor: '' });
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
