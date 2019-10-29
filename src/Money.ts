import * as Currency from "./Currency";

type t = {
  value: number;
  amount: number;
  currency: Currency.t;
};

export let make = (value: number, currencyCode: string): t => {
  const currency = Currency.make(currencyCode);

  return {
    value,
    amount: value / currency.subunitToUnit,
    currency
  };
};

export let fromAmount = (amount: number, currencyCode: string): t => {
  const currency = Currency.make(currencyCode);

  return make(Math.floor(amount * currency.subunitToUnit), currencyCode);
};

export let equals = (a: t, b: t) => {
  return a.amount === b.amount && a.currency.code === b.currency.code;
};

export let toFloat = (a: t): number => {
  return a.amount / Math.pow(10, a.amount);
};
