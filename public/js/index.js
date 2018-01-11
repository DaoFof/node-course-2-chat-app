var socket = io();

var loginForm = jQuery('#login');
var selectRoom = jQuery('#roomList');
var selectTypeRoom = jQuery('#roomType');
var roomNameTextBox = jQuery('[name=room]');
var roomKeyTextBox = jQuery('[name=key]');

socket.on('homePage', function(chatRooms){
  chatRooms.forEach(function (chatRoom){
    selectRoom.append(jQuery('<option style="color: black"></option>').text(chatRoom));
  });
});

socket.on('numberOfConnected', function(activeUser){
  var numberOfConnected = jQuery('#numberOfConnected');
  numberOfConnected.text('Number of active users : ' + activeUser);
});

$(roomNameTextBox).change(function(){
  if(roomNameTextBox.val().length>0){
    $(selectRoom).parent().hide('slow');
  }else{
    $(selectRoom).parent().show('fast');
  }
});

$(loginForm).submit(function(){
  if(roomNameTextBox.val().length>0){
    $(selectRoom).parent().remove();
  }else{
    $(selectRoom).attr('name', 'room');
    $(roomNameTextBox).remove();
  }
  return true;
});

$(selectTypeRoom).change(function(){
  if($(this).val() === 'Private'){
    $(roomKeyTextBox).parent().show('slow');
  }else{
    $(roomKeyTextBox).parent().hide('slow');
  }
});

$(document).ready(function(){
  $(roomKeyTextBox).parent().hide('fast');
});
