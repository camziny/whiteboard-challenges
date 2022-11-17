const stocksRouter = new express.Router()

stocksRouter.get("/", async (req, res) => {
    try {
        const finnhubApiResponse = await finnhubApi.getStocks()
        const stocksData = JSON.parse(finnhubApiResponse)
        return res.set({ "Content-Type": "application/json" }).status(200).json(stocksData)
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

stocksRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    try{
        const stocks = await finnhubApi.getStocks({ stockId: id })
        const stocksData = JSON.parse(stocks)
        return res.set({ "Content-Type": "application/json"  }).status(200).json(stocksData.response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ errors: error })
    }
})

