const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT ;
const DB_URL = process.env.DB_URL

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// routes
app.use('/product', require('./routes/products'));

mongoose.connect(DB_URL,{})
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log("MongoDB Not Connected :",err.message)
})





app.listen(PORT , () => console.log(`Listening on port ${PORT}`))