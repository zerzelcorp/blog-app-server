const {Schema,model} = require('mongoose')

const UserShema = new Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    avatar: { type: String}
})

module.exports = model("User",UserShema);