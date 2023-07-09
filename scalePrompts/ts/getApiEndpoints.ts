import { Headers, Request, Response } from "http";

const baseUrl = "https://www.example.com";

const getApiEndpoints = async () => {
  const request = new Request(baseUrl, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json",
    }),
  });

  const response = await fetch(request);

  if (response.status === 200) {
    const json = await response.json();

    const apiEndpoints = [];

    for (const endpoint of json.endpoints) {
      apiEndpoints.push(endpoint.url);
    }

    return apiEndpoints;
  } else {
    return [];
  }
};

const main = async () => {
  const apiEndpoints = await getApiEndpoints();

  console.log(apiEndpoints);
};

main();
