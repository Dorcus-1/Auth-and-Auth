const express = require('express');
const app = express();
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

// connect to database

const db= process.env.DATABASE_LOCAL;

mongoose.connect(db)
.then(() => {
    console.log("Successfully connected to database🥳");
})
.catch((error) => {
 console.log("database connection failed. exiting now🎆...");
 console.error(error);
 process.exit(1);
});


app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/login'));



const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log("Server has started at port: " + PORT))