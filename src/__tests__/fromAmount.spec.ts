import * as Money from "..";

// based on
// https://github.com/RubyMoney/money/blob/master/spec/money_spec.rb

test("it accepts numeric values", () => {
  expect(Money.fromAmount(1, "USD")).toEqual(Money.make(100, "USD"));
  expect(Money.fromAmount(1.0, "USD")).toEqual(Money.make(100, "USD"));
  expect(Money.fromAmount(1, "USD")).toEqual(Money.make(100, "USD"));
});

test("it converts given amount to subunits according to currency", () => {
  expect(Money.fromAmount(1, "USD")).toEqual(Money.make(100, "USD"));
  expect(Money.fromAmount(1, "TND")).toEqual(Money.make(1000, "TND"));
  expect(Money.fromAmount(1, "JPY")).toEqual(Money.make(1, "JPY"));
});

test("it returns the amount of cents as dollars", () => {
  expect(Money.make(100, "USD").amount).toEqual(1);
});

test("it does not lose precision", () => {
  expect(Money.make(10037, "USD").amount).toEqual(100.37);
});

test("it respects :subunit_to_unit currency property", () => {
  expect(Money.make(100, "USD").amount).toEqual(1);
  expect(Money.make(1000, "TND").amount).toEqual(1);
  expect(Money.make(1, "VUV").amount).toEqual(1);
  expect(Money.make(1, "CLP").amount).toEqual(1);
});
