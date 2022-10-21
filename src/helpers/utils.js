export function response() {
	const resp = JSON.parse(localStorage.getItem('all_jobs'));
	if (localStorage.getItem('all_jobs') === null) {
		return [];
	} else {
		return resp;
	}
}




	export const operations = {
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