import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

// starting http, websocket server in the same server
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", socket => {
  socket.on("enter_room", (roomName, done) => {
    console.log(roomName);
    done();
  })
})

// const wss = new WebSocket.Server({ server });
// const sockets = [];
// wss.on("connection", socket => {
//   sockets.push(socket);
//   socket["nickname"] = "anonymous";
//   // here, socket means connected browser.
//   console.log("Connected to Browser");
//   socket.on("close", () => console.log("Disconnected from the Browser"));
//   socket.on("message", message => {
//     const parsed = JSON.parse(message);
//     switch(parsed.type){
//       case "new_message":
//         sockets.forEach(aSocket => 
//           aSocket.send(`${socket.nickname}: ${parsed.payload}`));
//       case "nickname":
//         socket["nickname"] = parsed.payload;
      
//     }

//   });
// });


const handleListen = () =>
  console.log(`Listening on http://localhost:3000`);


httpServer.listen(3000, handleListen);
