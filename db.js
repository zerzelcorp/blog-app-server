const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/blog-app",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("DB connected")
})
.catch(e=>console.log(e))

