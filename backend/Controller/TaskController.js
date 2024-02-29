const Product = require("../Models/Task")
const fs = require("fs")

async function getRecord(req, res) {
    try {
        let data = await Product.find().sort({ _id: -1 })
        res.send({ status: 200, result: "Done", count: data.length, data: data })
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function createRecord(req, res) {
    // console.log(`from required`,{...req});
    try {
        const data = new Product(req.body)
        await data.save()
        // console.log(`From controller`,{...data});
        res.send({ status: 200, result: "Done", data: data })
    } catch (error) {
        // console.log(error);
        if (error.errors.title)
            res.send({ status: 400, result: "Fail", message: error.errors.title.message })
        else if (error.errors.description)
            res.send({ status: 400, result: "Fail", message: error.errors.description.message })
        else if (error.errors.duedata)
            res.send({ status: 400, result: "Fail", message: error.errors.duedata.message })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function getSingleRecord(req, res) {
    try {
        let data = await Product.findOne({ _id: req.params._id })
        if (data)
            res.send({ status: 200, result: "Done", data: data })
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function updateRecord(req, res) {
    // console.log(`update api`,{...req});
    try {
        let data = await Product.findOne({ _id: req.params._id })
        if (data) {
            // console.log(`From controller`,{...data});
            data.title = req.body.title ?? data.title
            data.description = req.body.description ?? data.description
            data.duedata = req.body.duedata ?? data.duedata



            await data.save()
            res.send({ status: 200, result: "Done", message: "Record Updated", data: data })
        }
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    } catch (error) {
        if (error.keyValue)
            res.send({ status: 400, result: "Fail", message: "Product Name Already Exist" })
        else
            res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}

async function deleteRecord(req, res) {
    try {
        let data = await Product.findOne({ _id: req.params._id })
        if (data) {

            await data.deleteOne()
            res.send({ status: 200, result: "Done", message: "Record is Deleted" })
        }
        else
            res.send({ status: 404, result: "Result", message: "Record Not Found" })
    } catch (error) {
        res.send({ status: 500, result: "Fail", message: "Internal Server Error" })
    }
}


module.exports = {
    getRecord: getRecord,
    createRecord: createRecord,
    getSingleRecord: getSingleRecord,
    updateRecord: updateRecord,
    deleteRecord: deleteRecord,

}