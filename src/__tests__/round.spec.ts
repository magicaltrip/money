import { round, roundUp, roundDown } from "../Money";

test("round 1.667788 to USD => 1.67", () => {
  const rounded = round(1.667788, "USD");
  expect(rounded).toEqual(1.67);
});

test("round 1.667788 to JPY => 2", () => {
  const rounded = round(1.667788, "JPY");
  expect(rounded).toEqual(2);
});

test("round 1.664488 to USD => 1.66", () => {
  const rounded = round(1.664488, "USD");
  expect(rounded).toEqual(1.66);
});

test("round 1.447788 to JPY => 2", () => {
  const rounded = round(1.447788, "JPY");
  expect(rounded).toEqual(1);
});

test("round 5.63 USD => 6", () => {
  const rounded = roundUp(5.63, "USD");
  expect(rounded).toEqual(6);
});

test("round 5.23 USD => 6", () => {
  const rounded = roundUp(5.23, "USD");
  expect(rounded).toEqual(6);
});

test("round 5 USD => 5", () => {
  const rounded = roundUp(5, "USD");
  expect(rounded).toEqual(5);
});

test("round 523 JPY => 600", () => {
  const rounded = roundUp(523, "JPY");
  expect(rounded).toEqual(600);
});

test("round 563 JPY => 600", () => {
  const rounded = roundUp(563, "JPY");
  expect(rounded).toEqual(600);
});

test("round 600 JPY => 600", () => {
  const rounded = roundUp(600, "JPY");
  expect(rounded).toEqual(600);
});

test("round 8.62 NZD => 9", () => {
  const rounded = roundUp(8.62, "NZD");
  expect(rounded).toEqual(9);
});

test("round 23.69 BRL => 24", () => {
  const rounded = roundUp(23.69, "BRL");
  expect(rounded).toEqual(24);
});

test("round 53.48 SEK => 54", () => {
  const rounded = roundUp(53.48, "SEK");
  expect(rounded).toEqual(54);
});

test("round 286.31 PHP => 287", () => {
  const rounded = roundUp(286.31, "PHP");
  expect(rounded).toEqual(287);
});

test("round 19.53 ILS => 20", () => {
  const rounded = roundUp(19.53, "ILS");
  expect(rounded).toEqual(20);
});

test("round 401.73 INR => 402", () => {
  const rounded = roundUp(401.73, "INR");
  expect(rounded).toEqual(402);
});

test("round 5.63 USD => 5", () => {
  const rounded = roundDown(5.63, "USD");
  expect(rounded).toEqual(5);
});

test("round 5.23 USD => 5", () => {
  const rounded = roundDown(5.23, "USD");
  expect(rounded).toEqual(5);
});

test("round 5 USD => 5", () => {
  const rounded = roundDown(5, "USD");
  expect(rounded).toEqual(5);
});

test("round 523 JPY => 600", () => {
  const rounded = roundDown(523, "JPY");
  expect(rounded).toEqual(500);
});

test("round 563 JPY => 600", () => {
  const rounded = roundDown(563, "JPY");
  expect(rounded).toEqual(500);
});

test("round 600 JPY => 600", () => {
  const rounded = roundDown(600, "JPY");
  expect(rounded).toEqual(600);
});

test("round 8.62 NZD => 8", () => {
  const rounded = roundDown(8.62, "NZD");
  expect(rounded).toEqual(8);
});

test("round 23.69 BRL => 23", () => {
  const rounded = roundDown(23.69, "BRL");
  expect(rounded).toEqual(23);
});

test("round 53.48 SEK => 53", () => {
  const rounded = roundDown(53.48, "SEK");
  expect(rounded).toEqual(53);
});

test("round 286.31 PHP => 286", () => {
  const rounded = roundDown(286.31, "PHP");
  expect(rounded).toEqual(286);
});

test("round 19.53 ILS => 19", () => {
  const rounded = roundDown(19.53, "ILS");
  expect(rounded).toEqual(19);
});

test("round 401.73 INR => 401", () => {
  const rounded = roundDown(401.73, "INR");
  expect(rounded).toEqual(401);
});
