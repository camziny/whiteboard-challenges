using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BinanceAPI
{
    public class BinanceAPI
    {
        private string apiKey;
        private string apiSecret;

        public BinanceAPI(string apiKey, string apiSecret)
        {
            this.apiKey = apiKey;
            this.apiSecret = apiSecret;
        }

        public List<MarketData> GetMarketData()
        {
            // Make a request to the Binance API to get market data.
            // The response will be in JSON format.
            string response = MakeRequest("https://api.binance.com/api/v3/ticker/all");

            // Parse the JSON response into a list of MarketData objects.
            List<MarketData> marketData = JsonConvert.DeserializeObject<List<MarketData>>(response);

            return marketData;
        }

        private string MakeRequest(string url)
        {
            // Create a HttpClient object.
            HttpClient client = new HttpClient();

            // Add the API key and secret to the request headers.
            client.DefaultRequestHeaders.Add("X-API-KEY", apiKey);
            client.DefaultRequestHeaders.Add("X-API-SECRET", apiSecret);

            // Make the request.
            HttpResponseMessage response = client.GetAsync(url).Result;

            // Check the response status code.
            if (response.StatusCode != HttpStatusCode.OK)
            {
                throw new Exception("Error getting market data from Binance: " + response.StatusCode);
            }

            // Get the response body.
            string responseBody = response.Content.ReadAsStringAsync().Result;

            return responseBody;
        }
    }

    public class MarketData
    {
        public string symbol;
        public double price;
        public double change;
        public double volume;
    }
}
