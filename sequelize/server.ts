import express, { Request, Response } from "express";

// Create an instance of Express
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a route
app.get("/", (req: Request, res: Response) => {
  res.send("test");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
