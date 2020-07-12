function add (a, b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (numbers) {
	return Array.from(numbers).reduce((total, value) => {return total+value;}, 0);
}

function multiply (numbers) {
	return Array.from(numbers).reduce((result, value) =>{ return result*value},1);
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(number) {
	result = 1;
	for(let next = 1; next<=number; next++){
		result = result*next;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}