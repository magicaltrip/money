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

export let round = (amount: number, currencyCode: string) => {
  const currency = Currency.make(currencyCode);
  const fractionDigits = Math.log10(currency.subunitToUnit);

  return parseFloat(amount.toFixed(fractionDigits));
};

export let roundUp = (amount: number, currency: string) => {
  const money = fromAmount(amount, currency);
  const ceiledAmountInMajorUnits = Math.ceil(money.value / 100) * 100;

  return make(ceiledAmountInMajorUnits, currency).amount;
};

export let roundDown = (amount: number, currency: string) => {
  const money = fromAmount(amount, currency);
  const flooredAmountInMinorUnits = Math.floor(money.value / 100) * 100;

  return make(flooredAmountInMinorUnits, currency).amount;
};

type ExchangeRates = {
  [baseCurrencyCode: string]: {
    [targetCurrencyCode: string]: number;
  };
};

export let exchangeTo = (
  rates: ExchangeRates,
  fromMoney: t,
  targetCurrencyCode: string
) => {
  const exchangeRate = rates[fromMoney.currency.code][targetCurrencyCode];
  const newAmount = exchangeRate * fromMoney.amount;

  return fromAmount(newAmount, targetCurrencyCode);
};
