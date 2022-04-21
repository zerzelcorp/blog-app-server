const {Schema,model} = require('mongoose')

const taskShema = new Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String},
    date: { type: Date, default: Date.now },
})

module.exports = model("Task",taskShema);