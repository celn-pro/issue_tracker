const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()

// Define the uploads directory
const uploadDir = path.join(__dirname, 'uploads');

// Middleware to serve static files from the uploads directory
app.use('/uploads', express.static(uploadDir));

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
  console.log('Incoming request data:', req.body)
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
