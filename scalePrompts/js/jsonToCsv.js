const convertJsonToCsv = (json) => {
  const csv = [];
  for (const key in json) {
    const value = json[key];
    csv.push(`${key},${value}`);
  }
  return csv.join("\n");
};

const json = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
};

const csv = convertJsonToCsv(json);

console.log(csv);

const fs = require("fs");

fs.writeFileSync("data.csv", csv);
