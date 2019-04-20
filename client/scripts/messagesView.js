var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.render();
  },

  render: function() {
    $.getJSON('http://parse.sfo.hackreactor.com/chatterbox/classes/messages', function (message) {
      var i, html = '';
      console.log(message.results.length);
      for (i = 0; i < message.results.length; i++) {
        if (message.results[i].username) {
          html += MessageView.render(message.results[i]);
        }
      }
      console.log(html);
      $('#chats').append(html);
    });
  },

  renderMessage: function(message) {
    var name = window.location.search.match(/(username=)(\w+)/i)[2];
    $('#chats').prepend(`<div class="chat">
    <div class="username"> ${name} </div>
    <div> ${message} </div>
    </div>`);
  }
};