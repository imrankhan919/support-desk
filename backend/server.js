const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()

// Use Router

app.use('/api/users' , require('./routes/userRoutes'))



app.get('/' , (req,res)=>{
   res.status(200).send({message : "Welcome to support desk API"})
})

app.listen(PORT , ()=>{
    console.log(`Server is runnng at PORT :${PORT}`)
})

