/**
 * 1º AVALIAÇÃO (AV1)
 * 
 * DISCIPLINA: Inteligencia Artificial
 * Aluno: José Claudivan da Silva
 * 
 * Questão 10
 */

//Função para gerar numeros randomicos
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
}

//Função para gerar a população aleatoriamente no intervalo de 0 a 1000
function generatePopulation() {
	let population = [];

	for (let index = 0; index < 8; index++) {
		population.push(random(0, 1000));
	}

	return population;
}

//Função para o calculo da formula
function fitness(value, b, c) {
	return Math.abs(Math.pow(value, 2) - b * value + c);
}

//Função para conversão do individuo de decimal para binario
function getIndividualsAsBinary() {
	const populationArray = generatePopulation();
	const resultArray = [];

	populationArray.map((item) => {
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
function convertFromBinaryToDecimal(array) {
	const newArray = [];

	newArray = array.map((item) => {
		return parseInt(item, 2);
	});

	return newArray;
}

//Função para calcular cada individuo da população na formula do "fitness"
function calculateEachMember() {
	const binaries = getIndividualsAsBinary();
	let newArray = [];

	newArray = binaries.map((item) => {
		return {
			binary: item,
			decimal: parseInt(item, 2),
			fit: fitness(parseInt(item, 2), 18, 24),
		};
	});

	return newArray;
}

//Função para selecionar os individuos desejados
function filteredElements() {
	const elements = calculateEachMember();
	let newArray = [];

	newArray = elements.filter(function (item) {
		return item.fit < 300;
	});

	if (newArray.length === 0) {
		return "There is no fit member";
	}

	return newArray;
}

// Função para ordenar a populacao
function orderedPopulation() {
	const elements = calculateEachMember();
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

//Função da mutação dos individuos selecionados
function mutate(mutationRate) {
	for (let i = 0; i < this.keys.length; i += 1) {
		// If below predefined mutation rate,
		// generate a new random letter on this position.
		if (Math.random() < mutationRate) {
			this.keys[i] = generateLetter();
		}
	}
}

//Função para cruzamento dos individuos
function crossover(partner) {
	const { length } = this.target;
	const child = new Member(this.target);
	const midpoint = random(0, length);

	for (let i = 0; i < length; i += 1) {
		if (i > midpoint) {
			child.keys[i] = this.keys[i];
		} else {
			child.keys[i] = partner.keys[i];
		}
	}

	return child;
}

console.log(orderedPopulation());
