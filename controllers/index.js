const Document = require('../model/document')

const addData = async (req, res) => {
    try {
        const doc = await new Document({
            data: req.body
        })
        await doc.save()
        return res.status(201).json({ success: true, message: "Date Saved Successfully", response: doc._id })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", response: error.message })
    }
}

const getData = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await Document.findById(id)
        if (!doc) {
            return res.status(404).json({ success: false, message: "Not Found" })
        }
        return res.status(200).json({ success: false, message: "Here is your data", response: data })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error", response: error.message })
    }
}

module.exports = { addData, getData }