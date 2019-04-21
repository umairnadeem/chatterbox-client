var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
   
  },

  render: function(room) {
    $('#chats').empty();
    var i, html = '';
    console.log(Messages.results);
    for (i = 0; i < Messages.results.length; i++) {
      if (Messages.results[i].username) {
        if (room) {
          if (Messages.results[i].roomname === room) {
            html += MessageView.render(Messages.results[i]);
          }
        }
        else {
          html += MessageView.render(Messages.results[i])
        }
      }
    }
    $('#chats').append(html);

  },

  renderMessage: function(message) {
    var name = App.username;
    $('#chats').prepend(`<div class="chat">
    <div class="username"> <a href= "#" >${name}</a> </div>
    <div> ${message} </div>
    </div>`);
  }
};