const express= require('express')
const router = require('./routes/AppRoutes');
const cors = require('cors')
require('dotenv').config();
require('./db');

console.log(process.env)

/*
* VARIABLES
*/
const app = express()
const PORT = 3100 

/*
* Middlewares
*/
app.use(express.json());
app.use(express.static('public'))
app.use(cors());

/*
* ROUTER
*/
app.use('/',router);

/*
* STARTING THE SERVER
*/
app.listen(PORT,()=>{
    console.log(`🚀  Server Running on Url: http://localhost:${PORT}/`)
})
