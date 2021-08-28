import http from "http";
import WebSocket from "ws";
import express from "express";
import { createSocket } from "dgram";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () =>
  console.log(`Listening on http://localhost:3000 and ws://localhost:3000`);

// starting http, websocket server in the same server
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", socket => {
  sockets.push(socket);
  // here, socket means connected browser.
  console.log("Connected to Browser");
  socket.on("close", () => console.log("Disconnected from the Browser"));
  socket.on("message", message => {
    const strMessage = message.toString("utf-8");
    sockets.forEach(aSocket => aSocket.send(strMessage));
  });
});

server.listen(3000, handleListen);
