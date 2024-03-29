const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/routes')

require('dotenv').config();

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Enable CORS
app.use(cors({
	origin:'*'
}))

const dbHost = process.env.MONGODB_URI


// Define the uploads directory
const uploadDir = path.join(__dirname, 'uploads');

// Middleware to serve static files from the uploads directory
app.use('/uploads', express.static(uploadDir));

// const port = 3000
//mongosh "mongodb+srv://cluster0.srhtczz.mongodb.net/" --apiVersion 1 --username ayouberasto7
//const url = 'mongodb://localhost:27017/myDatabase';
// mongosh "mongodb+srv://ayouberasto7:94kpian0KvRbR98y@cluster0.srhtczz.mongodb.net/od22?apiVersion=1"

const url = dbHost

//connect to mongoDB using Mongoose
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Logging middleware
app.use((req, res, next) => {
  console.log('Incoming request data:', req.body)
  next() // Pass control to the next middleware
})

// Parse JSON and form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
// app.use(cors())

// Routes
app.use('/', routes)

const port = process.env.PORT || 3000; // Use PORT environment variable or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
