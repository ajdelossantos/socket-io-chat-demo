var app = require('express')();
var http = require('http').Server(app);

app.get('/', (req, res) => {
  res.send('<h2>Hello socket.io chat app!</h2>');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});