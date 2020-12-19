const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

function createUrlName(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function addUrl(item) {
  return {
    ...item,
    url: createUrlName(item.title + " " + item.memory + " " + item.color),
  };
}

const { apple, samsung } = mockData;
const data = JSON.stringify({
  // apple: {
  //   iphones: apple.iphones.map((item) => addUrl(item)),
  //   ipads: apple.ipads.map((item) => addUrl(item)),
  //   macbooks: apple.macbooks.map((item) => addUrl(item)),
  // },
  apple: apple,
  samsung: samsung,
  cart: [],
  orders: [],
});

const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
