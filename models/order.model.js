const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        customerId: {
            type: String
        },
        products: [],
        subtotal: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        shipping: {
            type: Object,
            required: true
        },
        delivery_status: {
            type: String,
            default: "pending"
        },
        payment_status: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;