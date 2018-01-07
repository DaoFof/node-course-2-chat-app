const path = require('path');
const http =  require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app =  express();
var server =  http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected');
  /*
  socket.emit() emit an event to a single connection
  */

  socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined'))

  socket.on('createMessage',(message, callback)=>{
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
    /*
    io.emit() emit an event to every single connection
    */

    // socket.broadcast.emit('newMessage',{
    //   from : message.from,
    //   text : message.text,
    //   createAt: new Date().getTime(),
    // });
    /*socket.broadcast.emit('',{}) is going to emit the message to everyone except the sender*/
  });

  socket.on('disconnect',()=>{
    console.log('User was disconnected');
  });
});
/*
io.on() let us register an event listener we can listen for an event and do something when it happens
*/

server.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
