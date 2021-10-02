import express from "express";
import { router } from "./router/curd.js";

const app = express();
// parser
app.use(express.json())

app.use(express.static("./public"))

app.get('/', (req,res)=> res.send('<h1>Hello this is the book app</h1>'))
app.use('/books', router);

const port = process.env.PORT || 5000 ;
app.listen(port, ()=> console.log(`server is running in port ${port}`))