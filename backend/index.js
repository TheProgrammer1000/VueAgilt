const express = require('express');
const cors = require('cors');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(logger);
app.use(cors());
app.use(express.json());

app
  .route('/')
  .get((req, res) => {
    res.send('Tjenare!');
  })
  .post((req, res) => {
    res.send('Tjaba');
  });

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('banned', (msg) => {
    console.log('message: ' + msg); // Denna kom först
    setTimeout(() => {
      console.log('Fungerade!'); // Denna kom efter ett tag
      socket.emit('unbanned', false);
    }, '6000');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen('3000', () => {
  console.log('Server started on port 3000');
});
