var Friends = {
  
  toggleStatus: function(){
      $('#chats').on('click', '.username', function() {
      if (Friends.friendsList.indexOf($(this).text()) === -1) {
      
        Friends.friendsList.push($(this).text());
      }
      //  $(this).css({color:"red"})
    })
  },
    friendsList: []
};