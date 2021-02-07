const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/api/users');
const bodyParser = require('body-parser');


// Body Parser Middleware**************
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//************************************* */


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


//serve static assets if in production
if(process.env.NODE_ENV === 'production')
{
    //use static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port, ()=>console.log(`...Server running on Port ${port}...`));