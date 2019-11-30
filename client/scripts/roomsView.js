var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  	var rooms = {}
  	Parse.readAll((elem) => {
      for (var i = 0; i < elem.results.length; i++) {
      	rooms[elem.results[i].roomname] = true;
      }
      for (var key in rooms) {
      	$('#rooms select').prepend('<option value="' + key + '">' + key + '</option>');
      }
    });
    console.log(rooms)
  },

  render: function() {

  },

  renderRoom: function(roomName) {
  	$('#rooms select').prepend('<option value="' + roomName + '">' + roomName + '</option>');
  }

};
