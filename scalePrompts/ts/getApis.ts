import axios from "axios";

const getApis = async (url: string) => {
  const response = await axios.get(url);
  const html = response.data;

  const apis = [];

  const apiRegex = /https?:\/\/api\.[a-zA-Z0-9\-]+\.com/g;
  const matches = apiRegex.exec(html);

  while (matches) {
    apis.push(matches[0]);
    matches = apiRegex.exec(html);
  }

  return apis;
};

const main = async () => {
  const url = "https://www.example.com";
  const apis = await getApis(url);

  console.log(apis);
};

main();
