import express, { type Request, type Response } from "express";
import figlet from "figlet";
const app = express();
const port = process.env.PORT ||3030;
app.get("/", (req:Request, res:Response) => {
  res.status(200).json({status:200,message:"Hello World!"});
});
app.listen(port, () => {
  const body = figlet.textSync("Start")
  console.log(body)
  console.log(`Listening on port ${port}`);
});