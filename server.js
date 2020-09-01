const express = require('express');

const app = express();

//register view engine
app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'));

app.listen(3000);

app.get('/', (req, res) => {
  res.render('home')
})