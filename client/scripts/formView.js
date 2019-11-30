var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var inputText = $('input').val();
    var message = {
      username: App.username,
      text: inputText,
      roomname: $('#rooms select').val()
    }
    // $('#chats').prepend(text);
    MessagesView.renderMessage(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

  //handleAdd: function(event) {}
};

