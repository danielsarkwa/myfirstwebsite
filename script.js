let balance = 50343.4; // double, float, decimals
var accountName = 'Daniel';
const pinCode = 1234;
let accountBlocked = false;
let reachedDailyLimit = true;

const connectedBank = 'Fidelity';
const IdNumber = '2Esdfdf4545';
const firstName = 'Ama'; // camel case

let absaBank = 60;
let accessBank = 80;
let stanbicBank = 100;
let GTBank = 200;

let total = absaBank * accessBank;

let studentFirstName = 'Desti';
let studentLastName = 'Mensah';

let age = 17;

if (age > 25) {
  console.log('Old enough to get a loan');
} else {
  console.log('Not old enough');
}

let score = 50;

if (score >= 70) {
  console.log('You passed!');
} else {
  console.log('Keep practicing.');
}

// initialize a function
function bankTotal(bank1, bank2) { // parameters
  console.log('Calulating bank details...');

  let total = bank1 + bank2;

  console.log('Bank total is ... ', total);
}

// invoke a function
bankTotal(absaBank, accessBank);

bankTotal(stanbicBank, GTBank);