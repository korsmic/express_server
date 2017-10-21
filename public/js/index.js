var socket = io();

socket.on("connect", function() {
  console.log("Connected the server");

  socket.emit("createMessage", {
    from: "jen@exsample.com",
    text: "Hey this is J"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
