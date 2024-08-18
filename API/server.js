import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import cardRouter from "./Routes/card.js"
import cors from "cors";
import 'dotenv/config'
const app = express();
const dbUrl = process.env.ATLASDB_URL;
app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods:["GET","POST"],
    credentials:true
}))




// Demo Home Route

app.get("/",(req,res)=>{
    res.json({message:"this is a home route"});
});

// Card Router

app.use("/card",cardRouter);


const port = 8080;

mongoose
  .connect(
    dbUrl,
    {
      dbName: "Help-Center",
    }
  )
  .then(() => {
    console.log("Database connected successfully....");
  })
  .catch((err) => {
    console.log(err);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
