export const formatMoney = (amount = 0) => {
  const options = {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  };

  /** 
   ** Check if its a clean amount

   *? if (amount % 100 === 0) {
    *? options.minimumFractionDigits = 0;
   *? }
  */

  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount);
};
