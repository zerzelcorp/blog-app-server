const {Schema,model} = require('mongoose')

const UserShema = new Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,require:true},
    password:{type:String,required:true}
    // avatar: { type: String}
})

module.exports = model("User",UserShema);