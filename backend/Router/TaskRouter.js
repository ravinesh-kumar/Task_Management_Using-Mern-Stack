const userRouter = require("express").Router()


const {
    getRecord, createRecord, getSingleRecord, updateRecord,
    deleteRecord
} = require("../Controller/TaskController")
userRouter.get("/", getRecord)
userRouter.post("/", createRecord)
userRouter.get("/:_id", getSingleRecord)
userRouter.put("/:_id", updateRecord)
userRouter.delete("/:_id", deleteRecord)



module.exports = userRouter