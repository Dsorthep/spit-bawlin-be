const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourcesSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: Date, 
        default: Date.now
    },
    url: {
        type: String,
        required: true
    }
});

const Resources = mongoose.model("Resources", ResourcesSchema);
module.exports = Resources;