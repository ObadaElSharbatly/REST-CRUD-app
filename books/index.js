import express from "express";
import { router } from "./router/curd.js";

const app = express();
// parser
app.use(express.json())

app.use(express.static("./public"))


// to access books api
app.use('/books', router);

const port = process.env.PORT || 5000 ;
app.listen(port, ()=> console.log(`server is running in port ${port}`))