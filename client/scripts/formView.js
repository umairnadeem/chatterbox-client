var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = $( '#message' ).val();
    var name = App.username;
    var formattedMessage = {
      roomname: RoomsView.$select.val(),
      text: message,
      username: name 
    };
  
    event.preventDefault();
    Parse.create(formattedMessage);
    MessagesView.render(RoomsView.$room);
    MessagesView.renderMessage(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};