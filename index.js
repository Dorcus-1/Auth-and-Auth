const express = require('express')
const app = express();
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/login')
var bodyParser=require("body-parser");
const cors = require('cors');
dotenv.config();

// connect to database


const database = process.env.MONGOLAB_URI;

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

app.use(express.json())
app.set('view engine', 'ejs');
app.use(cors());
//Routes
// app.use('/', require('./routes/login'));
app.use('/api/',router)

app.use(express.urlencoded({extended: false}));


// fetch('http://localhost:5000/register')
//   .then((response) => response.json())
//   .then((data) => console.log(data));



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started at port: " + PORT))