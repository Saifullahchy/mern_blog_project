require("dotenv").config();
const compression = require("compression")
const express = require ("express");
const connect = require("./config/db");

const app = express();
app.use(compression());
app.get('/',(req,res,next) => {
    res.send('hello mern blog');
})

const PORT =  process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log('Server running');
});

// connect to mongo db database

connect();
