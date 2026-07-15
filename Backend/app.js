const express = require('express')
const app = express()
const mongoose = require('mongoose')
const noteRoutes = require('./src/routes/noteRoutes')
const { connectDB } = require('./src/config/db')
const dotenv = require('dotenv')
const limiter = require('./src/middleware/rateLimiter')
const cors = require('cors')
dotenv.config()


app.use(express.json())
app.use(cors())
app.use(limiter)

app.use('/api/notes' , noteRoutes)










connectDB().then(()=>{
app.listen(3000, ()=>{
    console.log('SERVING AT PORT 3000')
})
})

