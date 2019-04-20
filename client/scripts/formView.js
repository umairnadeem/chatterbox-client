var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = $( '#message' ).val();
    var name = window.location.search.match(/(username=)(\w+)/i)[2];
    var formattedMessage = {
      roomname: RoomsView.$select.val(),
      text: message,
      username: name 
    };
  
    event.preventDefault();
    MessagesView.renderMessage(message);
    Parse.create((formattedMessage) => formattedMessage);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};