const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
 ball_colour: String, 
 ball_size: Number, 
 ball_cost: Number 
}) 
 
module.exports = mongoose.model("ball", 
ballSchema)
