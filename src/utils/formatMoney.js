export const formatMoney = (amount) => {
  const options = {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  };

  // ? Check if its a clean amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
};
