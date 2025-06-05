export const formatCurrencyIN = (value: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatNumberIN = (value: number): string =>
  new Intl.NumberFormat("en-IN").format(value);
