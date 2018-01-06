var socket = io();/*io() is a method available because we load the socket library.
When called it initiates the request from the client to the server and keep that open*/

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect',function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
