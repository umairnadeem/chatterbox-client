var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    Rooms.initialize();
    MessagesView.initialize();
    Friends.toggleStatus();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      callback();
      Messages.results = data.results;
      Rooms.results = _.uniq(data.results.map(elem => {
        if (elem.roomname) {
          return elem.roomname;
        }
      }));
      RoomsView.render();
      MessagesView.render(RoomsView.$room);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
