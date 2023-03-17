const express = require('express')

//import { engine } from 'express-handlebars';
const expressHbs = require('express-handlebars');

const app = express()

//app.engine('.hbs', ExpressHandlebars());
app.engine('.hbs', expressHbs.engine({defaultLayout: 'main' ,extname: "hbs"}));

app.set('view engine', '.hbs');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('baitho');
});



app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
