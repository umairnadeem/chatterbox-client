var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.render();
    RoomsView.$button.on('click', function() {
    RoomsView.renderRoom();
    })
  },

  render: function() {
    $.getJSON('http://parse.sfo.hackreactor.com/chatterbox/classes/messages', function (message) {
      var i, room = '';
      for (i = 0; i < message.results.length; i++) {
        if (message.results[i].roomname) {
          room = message.results[i].roomname;
          RoomsView.$select.append(`<option> ${room} </option>`);
        }
      }
    });

    

  },

  renderRoom: function(room) {
    room = room ? room : prompt("Enter room name", "");
    if (room) {
      RoomsView.$select.prepend(`<option> ${room} </option>`).val(room);
    }
  }

};
