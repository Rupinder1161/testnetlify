const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
     VenueName:{ type:String, required:true},
     FoodName:{ type:String,},
     Piclink:{type:String,},
     Description:{ type:String,},
     Price:{type:Number,},
     style:{type:Boolean},
    },{
        timestamps:true,
    });



    const Food = mongoose.model('Food',exerciseSchema);

    module.exports = Food;