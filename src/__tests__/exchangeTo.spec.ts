import { exchangeTo, fromAmount } from "../Money";

const rates = {
  USD: {
    CAD: 1.24515
  },
  CAD: {
    USD: 0.803115
  }
};

test("it should exchange USD to CAD", () => {
  const money = fromAmount(100, "USD");

  const actual = exchangeTo(rates, money, "CAD");
  const expected = fromAmount(124.51, "CAD");

  expect(actual).toEqual(expected);
});

test("it should exchange CAD to USD", () => {
  const money = fromAmount(100, "CAD");

  const actual = exchangeTo(rates, money, "USD");
  const expected = fromAmount(80.31, "USD");

  expect(actual).toEqual(expected);
});
