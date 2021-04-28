/**
 * 1º AVALIAÇÃO (AV1)
 * 
 * DISCIPLINA: Inteligencia Artificial
 * Aluno: José Claudivan da Silva
 * 
 * Questão 07
 */

//Função para gerar numeros randomicos
function geraNumeroRandomico(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
}

//Função para gerar a população aleatoriamente no intervalo de 0 a 300
function geraPopulacao() {
	let populacao = [];

	for (let index = 0; index < 8; index++) {
		populacao.push(geraNumeroRandomico(0, 300));
	}

	return populacao;
}

//Função para o calculo da formula
function fitness(value, b, c) {
	return Math.abs(Math.pow(value, 2) - b * value + c);
}

//Função para conversão do individuo de decimal para binario
function converteDecimaParaBinario() {
	const populacaoArray = geraPopulacao();
	const resultArray = [];

	populacaoArray.map((item) => {
		let value = item.toString(2);

		if (value.length < 12) {
			while (value.length < 12) {
				value = 0 + value;
			}
		}
		resultArray.push(value.toString(2));
	});

	return resultArray;
}

//Função para conversão do individuo de binario para decimal
function converteBinarioParaDecimal(array) {
	const newArray = [];

	newArray = array.map((item) => {
		return parseInt(item, 2);
	});

	return newArray;
}

//Função para calcular cada individuo da população na formula do "fitness"
function calcularIndividuos() {
	const binaries = converteDecimaParaBinario();
	let newArray = [];

	newArray = binaries.map((item) => {
		return {
			binary: item,
			decimal: parseInt(item, 2),
			fit: fitness(parseInt(item, 2), 4, 6),
		};
	});

	return newArray;
}

//Função para selecionar os individuos desejados
function filtrarElementos() {
	const elements = calcularIndividuos();
	let newArray = [];

	newArray = elements.filter(function (item) {
		return item.fit < 300;
	});

	if (newArray.length === 0) {
		return "Nenhum individuo atende ao criterio(fit < 300)";
	}

	console.log(`Individuos encontrados com fit < 300:`);
	return newArray;
}

// Função para ordenar a populacao
function ordenarPopulacao() {
	const elements = calcularIndividuos();
	let newArray = [];

	console.log(elements)

	newArray = elements.sort(function (memberA, memberB) {
		if (memberA.fit > memberB.fit) {
			return -1;
		}
		if (memberA.fit < memberB.fit) {
			return 1;
		}
		return 0;
	});

	console.log(newArray);

	return newArray;
}

//Função para cruzamento dos individuos
function cruzamento() {
	const selectedElements = filtrarElementos()
	const firstBits = []
	const middleBits = []
	const lastBits = []
}

console.log('POPULACAO INICIAL:\n',calcularIndividuos());
console.log(filtrarElementos());
