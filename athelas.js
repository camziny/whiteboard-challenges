import API_KEY from dotenv

const api_key = finnhub.ApiClient.instance.authentications['API_KEY']
api_key.apiKey = "<API_key>"

const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote(`${stock}`, (error, data, response) => {
    console.log(data)
});

class finnHubAPI {
    static async getStocks() {
        try{
            const apiResponse = await got(
                'https://finnhub.io/api/v1/webhook/list?token=cdlvroiad3ibbocjumfgcdlvroiad3ibbocjumg0',
                {
                    method: "GET",
                    headers: {
                        "finnhub-Host": "",
                        "finnhubAPI-key": `${api_key}`, 
                    },
                        }
                        )
                        const responseBody = apiResponse.body
                        return responseBody
                    } catch(error) {
                        return {error: error.message}
                    }
                }
        }
    
