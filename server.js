const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./Db/Db');
//const Book = require('./models/books');
const port = process.env.PORT || 5000;
const router = require('./routes/routes');
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(()=> console.log('Database Connected'))
    .catch(err => console.log('Connection failed' + err));

app.use('/books', router);
app.use('/auth', userRouter);


app.listen(port, ()=> {console.log(`Server running on port ${port}`)});