module.exports = socket => {
  socket.emit('welcome');
  
  socket.on('hello', data => {
    console.log(data, ' from no-line client');
  });
  
  socket.on('disconnect', () => console.log('a socket has disconnected'));
};