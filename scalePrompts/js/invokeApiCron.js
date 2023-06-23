// */5 * * * * node /path/to/invoke-api.js

const http = require("http");

const url = "http://localhost:3000/api/endpoint";

const options = {
  method: "GET",
};

const request = http.request(url, options, (response) => {
  const data = response.data;

  // Do something with the data.
});

request.end();
