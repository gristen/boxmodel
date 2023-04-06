// Короба или товар в коробе
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boxesShema = new Schema ({
    // шк короба
    barcodeBox: {
        type: Number,
        require: true
    },
    // idТовар в обработке
    // idProductsProcesses: {
    //     ref: "productsProcesses",
    //     type: Schema.Types.ObjectId
    // },
    // количество
    quantity: {
        type: Number,
        require: true
    },
    // шк товара
    barcodeProduct: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('boxes',boxesShema)