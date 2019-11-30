var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  	var data = [];
  	Parse.readAll((elem) => {
      // examine the response from the server request:
      for (var i = 0; i < elem.results.length; i++) {
        // if (!elem.results[i].text.match(/\W/)){
          data.push(elem.results[i]);
          if (elem.results[i].username && elem.results[i].text) {
            $('#chats').append(MessageView.render(elem.results[i]))
          } else if(!elem.results[i].username && !elem.results[i].text){
            $('#chats').append(MessageView.render({username: "invalid", text: "invalid"}))
          } else if (!elem.results[i].username){
            $('#chats').append(MessageView.render({username: "invalid", text: elem.results[i].text}))
          } else if (!elem.results[i].text){
            $('#chats').append(MessageView.render({username: elem.results[i].username, text: "invalid"}))
          }
        // }
      	
      }
      $(".username").click(function(){
        if (!this.innerHTML.match("Henshem")){
          Friends.toggleStatus(this);
        }
          
      });
          $('#rooms button').on('click', () => {
      var roomName = $('input').val();
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    })
      
    });
    console.log(data)
  },

  render: function(message) {
    Parse.create(message, 'good job');
    $('#chats').prepend(MessageView.render(message));
      $(".username").click(function(){
        if (!this.innerHTML.match("Henshem")){
          Friends.toggleStatus(this);
        }
      });
          $('#rooms button').on('click', () => {
      var roomName = $('input').val();
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    })
  },

  renderMessage: function(message) {
  	Parse.create(message, 'good job');
  	$('#chats').prepend(MessageView.render(message));
      $(".username").click(function(){
        if (!this.innerHTML.match("Henshem")){
          Friends.toggleStatus(this);
        }
      });
          $('#rooms button').on('click', () => {
      var roomName = $('input').val();
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    })
  }

};
