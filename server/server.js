/*eslint-disable no-console*/
const express = require('express');
import routes from './routes';
const app = express();
const router = express.Router();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;


// Require all routes into the application.
routes(router);

app.use('/api/v1', router);

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(PORT, () => {
  console.log(`BuyIt is running on port:${PORT}`);
});
