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
const btnTip = document.querySelectorAll('.btn');

btn5.addEventListener('click', function () {
	const ppl = Number(people.value);
	const bill = Number(bills.value);
	const tip5 = bill * 0.5;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});

btn10.addEventListener('click', function () {
	const ppl = Number(people.value);
	const bill = Number(bills.value);
	const tip5 = bill * 0.5;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});

btn15.addEventListener('click', function () {
	const ppl = Number(people.value);
	const bill = Number(bills.value);
	const tip5 = bill * 0.5;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});

btn25.addEventListener('click', function () {
	const ppl = Number(people.value);
	const bill = Number(bills.value);
	const tip5 = bill * 0.5;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});

btn50.addEventListener('click', function () {
	const ppl = Number(people.value);
	const bill = Number(bills.value);
	const tip5 = bill * 0.5;
	tipAmount.textContent = (tip5 / ppl).toFixed(2);
	total.textContent = (bill + tip5) / ppl;
});

reset.addEventListener('click', function () {
	location.reload();
	console.log();
});
