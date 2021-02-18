const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const notasRouter = require('./router/notasRouter');
 

app.use(express.urlencoded({ estended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', notasRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.listen(3000, function () {
    console.log('Corriendo')
    console.log('http://localhost:3000/')
}) 