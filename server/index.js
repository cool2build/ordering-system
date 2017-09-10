const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const middleware = require('./middleware');
const config = require('config');
const db = require('../database'); 
const port = process.env.PORT || 8080;

// server
app.use(middleware.bodyParser.json());
app.use(middleware.bodyParser.urlencoded({ extended: true }));

// socket.io
io.set('origins', config.socket.origins);
io.on('connection', middleware.socket);

server.listen(port, () => console.log(`Ready to accept connections on port ${port}`));