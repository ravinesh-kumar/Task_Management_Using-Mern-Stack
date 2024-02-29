const userRouter = require("express").Router()
const multer = require('multer') 
// const { verifyAdmin, verifyBoth } = require("../verification")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/uploads/users')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

const {
    getRecord, createRecord, getSingleRecord, updateRecord,
    deleteRecord, login
} = require("../Controller/UserController")
userRouter.get("/",  getRecord)
userRouter.post("/", createRecord)
userRouter.get("/:_id",  getSingleRecord)
// userRouter.put("/:_id",  upload.single("pic"), updateRecord)
userRouter.put("/:_id",  updateRecord)
userRouter.delete("/:_id",  deleteRecord)
userRouter.post("/login", login)
// userRouter.post("/forget-password-1", forgetPassword1)
// userRouter.post("/forget-password-2", forgetPassword2)
// userRouter.post("/forget-password-3", forgetPassword3)

module.exports = userRouter