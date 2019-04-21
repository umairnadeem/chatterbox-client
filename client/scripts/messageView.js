var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <a href= "#" id = "user"> <%- username %> </a> </div>
        <div class="text"> <%- text %> </div>
      </div>
    `)

};