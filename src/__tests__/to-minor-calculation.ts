import { Currency } from "../index";

test("JPY should be 1", () => {
  expect(Currency.minorUnitsFactor["JPY"]).toEqual(1);
});

test("USD should be 100", () => {
  expect(Currency.minorUnitsFactor["USD"]).toEqual(100);
});
