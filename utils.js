export const calculateMonthlyInterest = (loan, interest) => {
  return (loan * interest) / 12;
};

export const calculateMonthlyLoanPayment = (loan, interest, terms) => {
  const monthlyInterest = interest / 12;
  const monthlyTerms = terms * 12;
  return (
    (loan * monthlyInterest * Math.pow(1 + monthlyInterest, monthlyTerms)) /
    (Math.pow(1 + monthlyInterest, monthlyTerms) - 1)
  );
};
