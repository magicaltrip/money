import currencies from "./currency-iso-2018-08-29.json";

export type t = {
  code: string;
  subunitToUnit: number;
};

export let make = (code: string) => {
  const record = currencies.find(c => c.Ccy === code);

  if (!record || record.CcyMnrUnts == null) {
    throw new Error(`Currency::Invalid code ${code}`);
  }

  return {
    code: record.Ccy,
    subunitToUnit: Math.pow(10, record.CcyMnrUnts)
  };
};
