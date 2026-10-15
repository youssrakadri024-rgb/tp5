
const express = require('express');

const dotenv = require("dotenv");

dotenv.config()

const port = process.env.PORT
app.get('/', (req, res) =>{
    res.send("salut from backend")
})

app.listen(port, () =>{
    console.log("Server tourne bien au "+ port);
});