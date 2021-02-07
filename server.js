const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/api/users');
//db config *******************************
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(()=>console.log('.....Mongodb connected.....'))
    .catch(err=>console.log(err));
// ********************************************

app.get('/', (req,res)=>res.send('Hello World!'));

//use routes
app.use('/memes',users);

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`...Server running on Port ${port}...`));