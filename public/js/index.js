var socket = io();

var loginForm = jQuery('#login');
var select = jQuery('#roomList');
var roomTextbox = jQuery('[name=room]');

socket.on('homePage', function(chatRooms){
  chatRooms.forEach(function (chatRoom){
    select.append(jQuery('<option style="color: black"></option>').text(chatRoom));
  });
});

$(roomTextbox).change(function(){
  if(roomTextbox.val().length>0){
    $(select).parent().hide('slow');
  }else{
    $(select).parent().show('fast');
  }
});

$(loginForm).submit(function(){
  if(roomTextbox.val().length>0){
    $(select).parent().remove();
  }else{
    $(select).attr('name', 'room');
    $(roomTextbox).remove();
  }
  return true;
});
