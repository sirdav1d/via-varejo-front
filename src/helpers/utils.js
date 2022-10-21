export const getData = (key) => {
	const response = localStorage.getItem(key);
	console.log(response);
};


getData('Compra')

function Total(a, b) {
	const resp = a + b;
	return resp;
}
