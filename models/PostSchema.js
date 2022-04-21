const {Schema,model} = require('mongoose')

const PostShema = new Schema({
    author:String,
    title:{type:String,required:true,unique:true},
    description:{type:String},
    date: { type: Date, default: Date.now },
})

module.exports = model("Post",PostShema);