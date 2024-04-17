import express, { type Request, type Response } from "express";
import { productQuery } from "models/query/product";
const app = express();
const port = process.env.PORT ||3030;
app.get("/", (req:Request, res:Response) => {
  res.status(200).json({status:200,message:"Hello World!"});
});
productQuery()
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});