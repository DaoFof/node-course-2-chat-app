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
  var li = jQuery('<li> </li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage',{
    from:'User',
    text: jQuery('[name=message]').val()
  },function(){

  });
});
