const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())
require("./DB")
app.use(cors()) 
const router = require("./Router/RootRouter")
app.use("/api", router)
app.listen(8080, () => {
    console.log("server connected on http://localhost:8080");
})