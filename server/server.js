const path = require('path');
const http =  require('http');
const express = require('express');
const socketIO = require('socket.io');


const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation.js');
const {Users} = require('./utils/users');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app =  express();
var server =  http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected');
  /*
  socket.emit() emit an event to a single connection
  */

  socket.on('join', (params, callback)=>{
    if(!isRealString(params.name) || !isRealString(params.room)){
      return callback('Name and room name are required');
    }

    socket.join(params.room);
    //socket.leave('  '); leave a room

    //io.emit -> io.to('The office Fans').emit
    //socket.broadcast.emit -> socket.broadcast.to('The office fans').emit
    //socket.emit

    users.removeUser(socket.id);
    users.addUser(socket.id, params.name, params.room);

    io.to(params.room).emit('updateUserList',users.getUserList(params.room));
    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin', `${params.name} has joined`));


    callback();
  });

  socket.on('createMessage',(message, callback)=>{
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
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

  socket.on('createLocationMessage',(coords)=>{
    io.emit('newLocationMessage',generateLocationMessage('Admin', coords.latitude,coords.longitude));
  });

  socket.on('disconnect',()=>{
    var user = users.removeUser(socket.id);
    if(user){
      io.to(user.room).emit('updateUserList',users.getUserList(user.room));
      io.to(user.room).emit('newMessage',generateMessage('Admin', `${user.name} has left`));
    }
  });
});
/*
io.on() let us register an event listener we can listen for an event and do something when it happens
*/

server.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
});
