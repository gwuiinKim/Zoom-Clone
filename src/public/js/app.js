const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

// here, socket means connected server..
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server");
});

socket.addEventListener("message", message => {
  console.log("Just got this: ", message, "from the server");
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

messageForm.addEventListener("submit", event => {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  console.log(input.value);
  input.value = "";
});
