const socket = io();


// const messageList = document.querySelector("ul");
// const messageForm = document.querySelector("#message");
// const nickForm = document.querySelector("#nick");

// function makeMessage(type, payload) {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
// }

// // here, socket means connected server..
// const socket = new WebSocket(`ws://${window.location.host}`);

// socket.addEventListener("open", () => {
//   console.log("Connected to Server");
// });

// socket.addEventListener("message", message => {
//   const li = document.createElement("li");
//   li.innerText = message.data;
//   messageList.append(li);
//   console.log("Just got this: ", message, "from the server");
// });

// socket.addEventListener("close", () => {
//   console.log("Disconnected from Server");
// });

// messageForm.addEventListener("submit", event => {
//   event.preventDefault();
//   const input = messageForm.querySelector("input");
//   socket.send(makeMessage("new_message", input.value));
//   console.log(input.value);
//   input.value = "";
// });

// nickForm.addEventListener("submit", event => {
//   event.preventDefault();
//   const input = nickForm.querySelector("input");
//   socket.send(makeMessage("nickname", input.value));
//   input.value = "";
// });
