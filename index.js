/******************** zadanie 1 ********************/
const hello = 'Hello';
const world = 'world!';
console.log(`${hello} ${world}`);

/******************** zadanie 2 ********************/
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(5, 8));

/******************** zadanie 3 ********************/
const average = (...args) => {
	const count = args.length;
	let sum = 0;

	if (count === 0) return 0;

	args.forEach(arg => sum += arg);
	return sum / count;
};
console.log(average(5, 6, 7, 8, 9, 1, 2));

/******************** zadanie 4 ********************/
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

/******************** zadanie 5 ********************/
const [, , firstName, , lastName] = [1, 4, 'Iwona', false, 'Nowak'];
console.log(firstName, lastName);