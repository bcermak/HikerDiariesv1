const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')
// Setting up Mongoose connection
mongoose.connect('mongodb://localhost/encore_posts',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', ()=>{
    console.log("Mongoose is connected to DB")
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`))