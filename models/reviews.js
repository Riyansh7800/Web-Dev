const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        max:5,
        min:0
    },
    createdAt:{
        type:Date,
        default:Date.now(),

    },

    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports =mongoose.model("Review",ReviewSchema);