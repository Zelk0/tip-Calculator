const btn5 = document.querySelector('.percent5');
const btn10 = document.querySelector('.percent10');
const btn15 = document.querySelector('.percent15');
const btn25 = document.querySelector('.percent25');
const btn50 = document.querySelector('.percent50');
const reset = document.querySelector('.reset');
const custom = document.querySelector('.custom-tip');
const bills = document.querySelector('.bill-price-input');
const people = document.querySelector('.number-of-people-input');
const tipAmount = document.querySelector('.output-tip-amount');
const total = document.querySelector('.output-total-amount');

btn5.addEventListener('click', function () {
	const bill = Number(bills.value);
	const ppl = Number(people.value);
	const tip5 = bill * 0.05;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});
btn10.addEventListener('click', function () {
	const bill = Number(bills.value);
	const ppl = Number(people.value);
	const tip10 = bill * 0.1;
	tipAmount.textContent = (tip10 / ppl).toFixed(2);
	total.textContent = (bill + tip10) / ppl;
});
btn15.addEventListener('click', function () {
	const bill = Number(bills.value);
	const ppl = Number(people.value);
	const tip15 = bill * 0.15;
	tipAmount.textContent = (tip15 / ppl).toFixed(2);
	total.textContent = (bill + tip15) / ppl;
});
btn25.addEventListener('click', function () {
	const bill = Number(bills.value);
	const ppl = Number(people.value);
	const tip25 = bill * 0.25;
	tipAmount.textContent = (tip25 / ppl).toFixed(2);
	total.textContent = (bill + tip25) / ppl;
});
btn50.addEventListener('click', function () {
	const bill = Number(bills.value);
	const ppl = Number(people.value);
	const tip50 = bill * 0.5;
	tipAmount.textContent = (tip50 / ppl).toFixed(2);
	total.textContent = (bill + tip50) / ppl;
});

reset.addEventListener('click', function () {
	location.reload();
	console.log();
});
