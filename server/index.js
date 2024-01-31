const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()
const port = 3000
const url = 'mongodb://localhost:27017/myDatabase';

//connect to mongoDB using Mongoose
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Enable CORS
app.use(cors())

//Logging middleware
app.use((req, res, next) => {
  console.log('Incoming request data:')
  next() // Pass control to the next middleware
})

// Parse JSON and form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors())

// Routes
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
