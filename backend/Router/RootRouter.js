const router = require("express").Router()

const userRouter = require("./UserRouter")
const taskRouter = require("./TaskRouter")



router.use("/user", userRouter)
router.use("/task", taskRouter)


module.exports = router