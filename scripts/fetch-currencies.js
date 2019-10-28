const https = require("https");
const fs = require("fs");
const { join } = require("path");
const { parseString } = require("xml2js");

const parseCountry = entry => ({
  CtryNm: Array.isArray(entry.CtryNm) ? entry.CtryNm[0] : null,
  CcyNm: Array.isArray(entry.CcyNm) ? entry.CcyNm[0] : null,
  Ccy: Array.isArray(entry.Ccy) ? entry.Ccy[0] : null,
  CcyNbr: Array.isArray(entry.CcyNbr) ? entry.CcyNbr[0] : null,
  CcyMnrUnts: Array.isArray(entry.CcyMnrUnts)
    ? Number.parseInt(entry.CcyMnrUnts[0])
    : null
});

const url = "https://www.currency-iso.org/dam/downloads/lists/list_one.xml";
const outputPath = publishedAt =>
  join(__dirname, "..", "src", `currency-iso-${publishedAt}.json`);

https
  .get(url, res => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      parseString(data, (err, result) => {
        const publishedAt = result.ISO_4217.$.Pblshd;
        const table = result.ISO_4217.CcyTbl[0].CcyNtry.map(parseCountry);
        const json = JSON.stringify(table);

        fs.writeFile(outputPath(publishedAt), json, () => {
          process.exit(0);
        });
      });
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
