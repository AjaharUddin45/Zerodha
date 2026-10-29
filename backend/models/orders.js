const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
        name: String,
        qty: Number,
        price: Number,
        mode: String,
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;