const mongoose = require("mongoose");

const bmiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    height: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    bmi: {
        type: Number,
        required: true
    }
});

const BMI = mongoose.model("BMI", bmiSchema);

module.exports = BMI;