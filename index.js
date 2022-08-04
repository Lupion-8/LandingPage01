const express = require('express');
const app = express();
const http = require('http');
const { env } = require('process');
const server =  http.createServer(app);
const {Server} =  require('socket.io');
const io = new Server(server);
const path = require('path');
const port = process.env.PORT || '3333';

app.use('/files',express.static(path.join(__dirname,'/public/')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/private/landing.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
});
  
server.listen(port, () => {
    console.log(`on-line na porta ${port}`);
});
