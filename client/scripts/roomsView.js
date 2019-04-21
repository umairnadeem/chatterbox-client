var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#rooms select option:selected').val(),
  initialize: function() {
    RoomsView.$select.on('change', function() {
      RoomsView.$room = $('#rooms select option:selected').val();
      console.log(RoomsView.$room);
      MessagesView.render(RoomsView.$room);
    });
  },

  render: function() {
    Rooms.results.forEach(Rooms.add)
  },
  renderRoom: function (room) {
    room = room ? room : null;
    Rooms.add(room);
  }

};
