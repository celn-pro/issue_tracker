const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

//MongoDB Connection Url
const url = 'mongodb://localhost:27017/myDatabase';

//connect to mongoDB using Mongoose
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('Connected successfully to database!');

        //create a mongoose model (schema)
        const customerSchema = new mongoose.Schema({
            name: String,
            age: Number,
            email: String
        });

        //create a mongoose collection based on the schema
        const customerModel = mongoose.model('customers', customerSchema);

        //adding a customer in customers
        const newData = new customerModel({
            name: 'Anne',
            age: 18,
            email: 'anne@gmail.com'
        });

        //save the document to the collection
        newData.save()
            .then(()=>{
                console.log('document inserted successfull');

            })
            .catch((err)=>{
                console.error('Error inserting document', err)
            });

    })
    .catch((err)=>{
        console.error('Error connecting to mongodb', err);
    })

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    });