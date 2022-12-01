const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
 ball_colour: {
    type:String,
    required:true
 }, 
 ball_size: {
    type:Number,
    required:true,
    min:0,
    max:100
 }, 
 ball_cost: {
    type:Number,
    required:true,
    min:0,
    max:500
 } 
}) 
 
module.exports = mongoose.model("ball", 
ballSchema)
