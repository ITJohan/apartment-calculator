import {
  calculateMonthlyInterest,
  calculateMonthlyLoanPayment,
} from './utils.js';

// calculateInterest
if (calculateMonthlyInterest(120, 0.1) === 1) {
  console.log('calculateMonthlyInterest(120, 0.1) === 1');
} else {
  console.error('calculateMonthlyInterest(120, 0.1) === 1');
}

// calculateMonthlyLoanPayment
if (
  calculateMonthlyLoanPayment(4_000_000, 0.02, 25) === 16_954.173_545_762_64
) {
  console.log(
    'calculateMonthlyLoanPayment(4_000_000, 0.02, 25) === 16_954.173_545_762_64'
  );
} else {
  console.error(
    'calculateMonthlyLoanPayment(4_000_000, 0.02, 25) === 16_954.173_545_762_64'
  );
}
