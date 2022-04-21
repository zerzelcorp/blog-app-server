const express= require('express')
const router = require('./routes/taskRoutes');
const cors = require('cors'
)

require('dotenv').config()

const app = express()

require('./db');

const PORT = process.env.PORT || 3100 

app.use(express.json());
app.use(express.static('public'))
app.use(cors());

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Server Running on Url: http://localhost:${PORT}/api/`)
})
