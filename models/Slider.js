const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String  
});

module.exports = mongoose.model("Slider", SliderSchema);
