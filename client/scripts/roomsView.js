var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	
  },

  render: function() {
  },

  renderRoom: function(message) {
  	Parse.create(message, 'good job');
  	$('#rooms select').prepend('<option value="${message.roomname}">${message.roomname}</option>');
  }

};
