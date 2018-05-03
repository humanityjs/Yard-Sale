/*eslint-disable no-console*/
const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(PORT, () => {
  console.log(`BuyIt is running on port:${PORT}`);
});
