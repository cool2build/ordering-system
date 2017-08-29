const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`listening on port ${port}`));