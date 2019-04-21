var Rooms = {
  initialize: function(){
    RoomsView.$button.on('click', function() {
      var room = prompt("Enter room name", "");
      Rooms.add(room);
      })
    },
  results: null,
  add: function (room) {
    room = room ? room : null;
    if (room) {
      RoomsView.$select.prepend(`<option> ${room} </option>`).val(room);
    }
  }
};